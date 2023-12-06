"use client";

import { useForm, SubmitHandler } from 'react-hook-form';

import createUsuario from '@/api/usuario/createUsuario';
import UsuarioModel from "@/model/UsuarioModel";
import Link from 'next/link';

export default function SingUp() {
    const { register, handleSubmit } = useForm<UsuarioModel>();

    const onSubmit: SubmitHandler<UsuarioModel> = (data) => {
        createUsuario(data);
    }

    return  (
        <main className='w-full h-[100dvh] flex flex-row items-center justify-center bg-amber-600'>
            <div className={`
                bg-white border-zinc-300 border-4 
                w-2/5 h-[80dvh] 
                flex flex-col items-center justify-center 
                rounded-xl shadow-3xl
            `}>
            <h1 className='font-bold text-5xl h-14 '>Cadastrar</h1>
            <form
                className='flex flex-col justify-center items-center'
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className='flex flex-col justify-center items-center p-3'>
                    <label className='font-bold text-2xl'>Email</label>
                    <input 
                        type='email'
                        className='w-[250px] h-[40px] bg-zinc-600 rounded-3xl text-white border-black border-2 focus:border-[3px] px-5'
                        placeholder='Ex.: fulano@email.com'
                        { ...register("email", { required: true }) }
                    />
                </div>
                <div className='flex flex-col justify-center items-center p-2'>
                    <label className='ml-3 font-bold text-2xl'>Nome de Usuário</label>
                    <input
                        type='text'
                        className='w-[250px] h-[40px] bg-zinc-600 rounded-3xl text-white border-black border-2 focus:border-[3px] px-5'
                        placeholder='fulano'
                        { ...register("usuario", { required:true, maxLength: 30 }) }
                    />
                </div>
                <div className='flex flex-col justify-center items-center p-2'>
                    <label className='ml-3 font-bold text-2xl'>Senha</label>
                    <input
                        type='password'
                        className='w-[250px] h-[40px] bg-zinc-600 rounded-3xl text-white border-black border-2 focus:border-[3px] px-5'
                        placeholder='123456'
                        { ...register("senha", { required: true }) }
                    />
                </div>
                <button 
                    type='submit' 
                    className={`
                        w-[200px] h-[50px] rounded-2xl py-7
                        flex items-center justify-center
                        bg-black text-amber-400 mt-5 
                        font-bold text-2xl
                        hover:bg-amber-600 hover:text-black border-3 hover:border-black
                    `}
                >
                    Registrar
                </button>                
            </form>
            <Link 
                href="/login"
                className="font-bold text-lg text-cyan-600 cursor-pointer m-4 hover:underline"    
            >
                <span>Já possuí uma conta?</span>
            </Link>
        </div>
    </main>
    );
}