'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import getCookie from "@/api/cookies/getCookie";
import getUsuarioByEmail from "@/api/usuario/getUsuarioByEmail";
import getAllChats from "@/api/chat/getAllChats";
import verifyToken from "@/api/auth/verifyToken";

import UsuarioModel from "@/model/UsuarioModel";
import ChatModel from "@/model/ChatModel";

import ChatRoom from "@/component/ChatRoom/ChatRoom";
import NoneChat from "@/component/NoneChat/NoneChat";


export default function Home({ params }) {
  const router = useRouter();

  const email = params.email;

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
    verifyPermission();
  });

  const [chats, setChats] = useState<ChatModel[]>([]);
  const [usuario, setUsuraio] = useState<UsuarioModel>();
  const [changeChat, setChangeChat] = useState({
    id: '',
    nome: '',
  });
    
  async function getChats() {
      try {
          const response = await getAllChats();       
          setChats(response);
          return response;
      } catch(err) {
          console.log(err);
      }
  }

  async function getUsuario(data: string) {
    const response = await getUsuarioByEmail(data);
    setUsuraio(response);
  }

  useEffect(() => {
    getUsuario(email);
    getChats();
  },[]);

  function varifyChat(){
    if (changeChat.nome === ''){
        return <NoneChat />
    } else {
        return <ChatRoom id_chat={changeChat.id} id_usuario={usuario?.id} nome_usuario={usuario?.usuario} />
    }
  }

  return(
      <div className={`
          flex justify-center items-center flex-row 
          bg-orange-500
          w-screen h-screen
      `}>
          <div className={`
              bg-slate-200
              w-1/4 h-[90%] rounded-l-lg overflow-hidden
              flex justify-start flex-col
              shadow-3xl
          `}>
              <div className={`
                  p-4
                  font-black text-3xl
                  border-b-4 border-zinc-500
                  bg-zinc-800 text-zinc-300
              `}>
                  {usuario?.usuario}
              </div>
              <div>
                  
              </div>
          </div>
          <div className={`
              bg-slate-200
              w-3/5 h-[90%]
              rounded-r-xl border-l-4 border-zinc-500 overflow-hidden
              flex items-center flex-col
              shadow-2xl
          `}>
              <div className={`
                  flex items-center justify-between
                  w-full p-4
                  border-b-4 border-zinc-500
                  bg-zinc-800 text-zinc-300
              `}>
                  {
                    changeChat.nome === ''
                    ?
                        <div className="w-full h-full flex flex-row items-center">
                            <p className="font-black text-xl h-9">Sala:</p>
                            <p className="font-black text-3xl pl-2">{changeChat.nome}</p>
                        </div>
                    : 
                        <div className="w-full h-full flex flex-row items-center">
                            <p className="font-black text-xl">Sala:</p>
                            <p className="font-black text-3xl pl-2">{changeChat.nome}</p>
                        </div>
                  }
              </div>
              <div className={`
                  w-full h-full
                  flex justify-end flex-col
                  overflow-hidden
              `}>
                  {varifyChat()}
              </div>
          </div>
      </div>
  );
}

