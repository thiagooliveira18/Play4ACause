"use client";

import  React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

import createMessage from "@/api/menssagem/createMessage";

import ChatInput from "../ChatInput/ChatInput";
import Mensagem from "../Mensagem/Mensagem";

interface Props {
    id_usuario: string | any;
    id_chat: string | any;
    nome_usuario: string | any;
}

interface MsgDataTypes {
    chat_id: string
    nome_usuario: string;
    texto: string;
    data_hora: string;
}

export default function ChatRoom(props: Props){
    const socket = io(`${process.env.NEXT_PUBLIC_BASE_URL_BACKEND}`).connect();
    
    const [ menssagens, setMenssagens ] = useState<MsgDataTypes[]>([]);
    const [ chatId, setChatId ] = useState('');
    
    const id = props.id_chat;

    useEffect(()=> {
        setChatId(id);
    },[chatId, id]);

    const handleClearMsgs: any = () => {
        if(id !== chatId) {
            setMenssagens([]);
            setChatId(id);
        } else {
            return true;
        }
    }
    
    const handleCreateMsg = async (texto: string, dataNow: string) => {
        createMessage({
            texto: texto,
            data_hora: dataNow,
            id_autor: props.id_usuario,
            id_chat: props.id_chat,
        });
    }

    const handleSendMsg = (texto: string) => {
        const dataNow = new Date().toLocaleString('pt-BR').replace(', ', ' - ')
        const newMsg: MsgDataTypes = {
            chat_id: props.id_chat,
            nome_usuario: props.nome_usuario,
            texto: texto,
            data_hora: dataNow,
        }
        handleCreateMsg(texto, dataNow);
        socket.emit('newMessage',  newMsg );
    }

    useEffect( () => { 
        socket.on('onMessage', (data: MsgDataTypes) => {

            setMenssagens([data, ...menssagens]);
        });
        return () => {
            socket.disconnect();
        }
    }, [socket, menssagens]);
    
    return(
        <div className="w-full h-full flex flex-col items-center justify-end">
            <div className="w-full h-full flex flex-col-reverse p-4 overflow-y-auto">
                {handleClearMsgs()}
                {menssagens.map(({ chat_id, nome_usuario, texto, data_hora }, index) =>                         
                        <Mensagem
                            key={index}
                            nome={nome_usuario}
                            texto={texto}
                            data_hora={data_hora}
                            isUser={props.nome_usuario !== nome_usuario ? false : true}
                        />
                )}
            </div>
            <ChatInput eventSend={handleSendMsg} />
        </div>
    );
}