interface ChatProps {
    id: string
    nome: string
    event: Function
}

export default function ChatButton(props: ChatProps) {
    return(
        <button onClick={() =>{props.event({id: props.id, nome: props.nome})}}
            className="w-full py-5 px-4 flex border-b-2 border-black hover:bg-slate-300">
            <span className="font-bold text-lg">
                {props.nome}
            </span>
        </button>
    );
}