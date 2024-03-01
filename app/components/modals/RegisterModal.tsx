'use client';

import userRegisterModal from '@/app/hooks/useRegisterModal';
import axios from 'axios';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../inputs/Input';
import toast from 'react-hot-toast';
import Button from '../Button';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';

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
                toast.error('Ocurrió un error...');
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

    const footerContent = (
        <div className='flex flex-col gap-4 mt-3'>
            <hr />
            <Button 
                outline
                label="Continuar con Google"
                icon={FcGoogle}
                onClick={()=>{}}
            />
            <Button 
                outline
                label="Continuar con Github"
                icon={AiFillGithub}
                onClick={()=>{}}
            />
            <div
                className="
                    text-neutral-500
                    text-center
                    mt-4
                    font-light
                "
            >
                <div className='justify-center flex flex-row items-center gap-2'>
                    <div>
                        ¿Ya tienes cuenta con nosotros?
                    </div>
                    <div
                        onClick={registerModal.onClose}
                        className='
                            text-neutral-800
                            cursor-pointer
                            hover:underline
                        '>
                        Ingresar
                    </div>
                </div>
            </div>
        </div>
    )

    return (  
        <Modal 
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            title="Inicia sesión o regístrate"
            actionLabel='Continuar'
            onClose={registerModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    );
}
 
export default RegisterModal;