'use client';


//import axios from 'axios';
import { useCallback, useState } from 'react';
import toast from 'react-hot-toast';
import {signIn} from 'next-auth/react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import { useRouter } from 'next/navigation'; //no next/router

import userRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';

import Modal from './Modal';
import Input from '../inputs/Input';
import Heading from '../Heading';
import Button from '../Button';



const LoginModal = () => {
    const router = useRouter();
    const loginModal = useLoginModal();
    const registerModal = userRegisterModal();    
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        },
    } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: ''
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        signIn('credentials',{
            ...data,
            redirect: false,

        })
        .then((callback) => {
            setIsLoading(false);

            if (callback?.ok) {
                toast.success('Logged in');
                router.refresh();
                loginModal.onClose();
            }

            if (callback?.error) {
                toast.error(callback.error);
            }
        }); 
    }

    const onToggle = useCallback(() => {
        loginModal.onClose();
        registerModal.onOpen();
      }, [loginModal, registerModal])

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Heading 
                title="Bienvenido"
                subtitle='Ingresar a tú cuenta'
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
                onClick={()=> signIn('google')}
            />
            <Button 
                outline
                label="Continuar con Github"
                icon={AiFillGithub}
                onClick={()=> signIn('github')}
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
                        ¿Primera vez con nosotros?
                    </div>
                    <div
                        onClick={onToggle}
                        className='
                            text-neutral-800
                            cursor-pointer
                            hover:underline
                        '>
                        Crear una cuenta
                    </div>
                </div>
            </div>
        </div>
    )

    return (  
        <Modal 
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            title="Inicia sesión"
            actionLabel='Continuar'
            onClose={loginModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    );
}
 
export default LoginModal;