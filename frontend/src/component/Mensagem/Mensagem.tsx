"use client";

interface Props {
    nome: string;
    texto: string;
    data_hora: string;
}

export default function Messagem(props: Props){

    return(
        <div className="w-full py-2 flex flex-col">
            <div className="w-3/5 border-2 border-stone-300 rounded-xl p-3 px-4 bg-white">
                <div className="text-base font-black">
                    {props.nome}
                </div>
                <div className="text-lg pb-2">
                    {props.texto}
                </div>
                <div className="text-xs">
                    {props.data_hora}
                </div>
            </div>
        </div>
    );
}