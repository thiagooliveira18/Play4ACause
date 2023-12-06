"use client";

import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import UsuarioModel from '@/model/UsuarioModel';

import loginUsuario from '@/api/usuario/loginUsuario';
import { serverAction } from '@/api/cookies/createCookie';

export default function Login() {    

    const router = useRouter();

    const { register, handleSubmit } = useForm<UsuarioModel>();
    const onSubmit: SubmitHandler<UsuarioModel> = async (data) => {
        let token:string = await loginUsuario(data);
        serverAction(token);
        router.push('/'+data.email);
    }

    return(
        <main className='w-full h-[100dvh] flex flex-row items-center justify-center bg-amber-600'>
            <div className='bg-white border-zinc-300 border-4 w-2/5 h-[80dvh] flex flex-col items-center justify-center rounded-xl shadow-3xl'>
                <h1 className='font-bold text-5xl h-14 mb-5'>Login</h1>
                <form
                    onSubmit={ handleSubmit(onSubmit) }
                    className='flex flex-col justify-center items-center'
                >
                    <div className='flex flex-col justify-center items-center p-3'>
                        <label className='font-bold text-2xl'>Email</label>
                        <input
                            type='email'
                            className='w-[250px] h-[40px] bg-zinc-600 rounded-3xl text-white border-black border px-5'
                            { ...register('email', { required: true }) }
                        />
                    </div>
                    <div className='flex flex-col justify-center items-center p-2'>
                        <label className='ml-3 font-bold text-2xl'>Senha</label>
                        <input
                            type='password'
                            className='w-[250px] h-[40px] bg-zinc-600 rounded-3xl text-white border-black border px-5'
                            { ...register('senha', { required: true }) }
                        />
                    </div>
                    
                    <button
                        type='submit'
                        className={`
                            w-[200px] h-[50px] rounded-2xl mt-8
                            bg-black text-amber-400
                            font-bold text-2xl
                            hover:bg-amber-600 hover:text-black hover:border-4 hover:border-black
                        `}
                    >
                        Entrar
                    </button>                    
                </form>
                <Link 
                    href='/singup'
                    className='font-bold text-lg text-cyan-600 cursor-pointer m-4 mt-6 hover:underline'    
                >
                    Registre-se aqui!
                </Link>
            </div>
        </main>
    );
}