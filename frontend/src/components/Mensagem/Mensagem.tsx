"use client";

interface Props {
    nome: string;
    texto: string;
    data_hora: string;
    isUser: boolean
}

export default function Messagem(props: Props){

    return(
            <div>
                {
                    props.isUser ?
                    <div className="w-full py-2 flex flex-col items-end">
                        <div className="w-2/4 flex flex-col items-end justify-center border-2 border-stone-400 rounded-xl p-3 px-4 bg-blue-600">
                            <div className="text-base font-black text-white">
                                Eu
                            </div>
                            <div className="text-lg pb-2 text-white">
                                {props.texto}
                            </div>
                            <div className="text-xs text-white">
                                {props.data_hora}
                            </div>
                        </div>
                    </div>
                    :
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
                }
            </div>
    );
}