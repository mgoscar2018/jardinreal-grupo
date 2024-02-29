'use client';

import userRegisterModal from '@/app/hooks/useRegisterModal';
import axios from 'axios';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../inputs/Input';

const RegisterModal = () => {
    const registerModal = userRegisterModal();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        axios.post('api/register',data)
            .then(()=> {
                registerModal.onClose();
            })
            .catch((error)=>{
                console.log(error);
            })
            .finally(()=> {
                setIsLoading(false);
            })
    }

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Heading 
                title="Bienvenido"
                subtitle='Crear una cuenta'
            />
            <Input 
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input 
                id="name"
                label="Nombre"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input 
                id="password"
                type="password"
                label="Contraseña"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    )

    return (  
        <Modal 
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            title="Regístrate"
            actionLabel='Continuar'
            onClose={registerModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
        />
    );
}
 
export default RegisterModal;