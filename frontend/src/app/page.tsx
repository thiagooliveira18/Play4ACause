'use client';

import verifyToken from "@/api/auth/verifyToken";

import getCookie from "@/api/cookies/getCookie";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  async function verifyPermission() {
    try{
      const token = await getCookie();
      if(!token){
          throw new Error('token inválido.');
      }
      const permission = await verifyToken(token.toString());
      if (!permission) {
        router.push('/login');
      }
      return;
    } catch(err){
      router.push('/login');
    }
  }

  useEffect( () => {
    router.push('/login');
  });


  return (    
    <>
      <p className="text-3xl font-black">Redirect...</p>
    </>
  )
}
