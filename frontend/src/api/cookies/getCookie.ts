"use server"

import { cookies } from "next/headers";

export default async function getCookie(): Promise<string|any>{
    try {
        const token = await cookies().get('authorization');        
        if(!token){
            throw new Error('token inválido.');
        }
        return token.value.toString();
    } catch(err){
        console.log(err);
    }
}