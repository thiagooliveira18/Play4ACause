import Link from "next/link";

interface ChatProps {
    id: string
    nome: string
    event: Function
}

export default function ChatButton(props: ChatProps) {
    return(
        <button 
            onClick={() =>{
                props.event({id: props.id, nome: props.nome, msgs: []})
            }}
            className="w-full flex items-center py-5 px-4 border-b-2 border-black hover:bg-slate-300">
            <span className="font-bold">
                { props.nome }
            </span>
        </button>
    );
}