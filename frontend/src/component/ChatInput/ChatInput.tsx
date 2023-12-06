import { SubmitHandler, useForm } from "react-hook-form";

import Image from "next/image";
import send from '../../../public/send.svg';

interface Props {
    eventSend: Function;
}

export default function ChatInput(props: Props){
    const { register, handleSubmit, reset } = useForm();
    const onSubmit: SubmitHandler<any> = (data) => {
        props.eventSend(data.text);
        reset();
    }

    return(
        <div className={`
            w-full h-10
            py-10
            border-t-2 border-l-2 border-black rounded-br-xl
            bg-neutral-600
            flex items-center justify-center
        `}>
            <div className={`
                flex items-center justify-between
                h-14 w-4/5
                bg-neutral-400
                rounded-3xl border-[3px] border-black
                overflow-hidden
            `}>
                <form
                    className="flex flex-row items-center justify-between w-full h-full"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input
                        type="text"
                        className={`
                            w-full h-full
                            rounded-l-2xl
                            bg-neutral-400
                            px-4 font-black
                            placeholder:text-zinc-600
                        `}
                        placeholder="Digite sua menssagem..."
                        { ...register("text", { required: true, maxLength: 255, })}
                    />
                    <button
                        className="p-4"
                        type="submit"
                    >
                        <Image
                            src={send}
                            alt="enviar"
                            className="w-4/4"
                        />
                    </button>
                </form>
            </div>
        </div>
    );
}