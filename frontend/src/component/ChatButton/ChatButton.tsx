interface ChatProps {
    id: string
    nome: string
    event: Function
}

export default function ChatButton(props: ChatProps) {
    return(
        <button onClick={() =>{props.event({id: props.id, nome: props.nome})}}
            className="w-full h-[30%] flex items-center">
            <span className="w-full font-bold text-lg p-4 flex items-center border-b-2 border-black hover:bg-slate-300">
                {props.nome}
            </span>
        </button>
    );
}