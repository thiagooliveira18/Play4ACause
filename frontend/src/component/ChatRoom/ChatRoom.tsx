"use client";

import  React, { useEffect, useState } from "react";

interface Props {
    id_usuario: string | any;
    id_chat: string | any;
    nome_usuario: string | any;
    msgs: any[],
}

interface MsgDataTypes {
    chat_id: string
    nome_usuario: string;
    texto: string;
    data_hora: string;
}

export default function ChatRoom(props: Props){
    const [ menssagens, setMenssagens ] = useState<MsgDataTypes[]>([]);
    const [ testId, setTestId ] = useState('');
    
    const id = props.id_chat;

    useEffect(()=> {
        setTestId(props.id_chat);
    },[testId]);

    const handleClearMsgs: any = () => {
        if(id !== testId) {
            setMenssagens([]);
            setTestId(id);
        } else {
            return true;
        }
    }
        
    return(
        <div className="w-full h-full flex flex-col items-center justify-end">
            <div className="w-full h-full flex flex-col-reverse items-end p-4 overflow-y-auto">
                {handleClearMsgs()}
            </div>
        </div>
    );
}