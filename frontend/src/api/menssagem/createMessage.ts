import MenssagemModel from "@/model/MenssagemModel";
import instance from "..";

export default async function createMessage(menssagem: MenssagemModel){
    try {
        const response = await instance.post('/msg/', {
            "texto": menssagem.texto,
            "data_hora": menssagem.data_hora,
            "id_usuario": menssagem.id_autor,
            "id_chat": menssagem.id_chat
        });

        if (response.status !== 201) {
            throw new Error('Ocorreu um erro inesperado');
        }
    } catch(err) {
        console.log(err);
    }
}