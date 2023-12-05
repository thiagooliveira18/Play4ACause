import instance from "..";
import UsuarioModel from "@/model/UsuarioModel";

export default async function createUsuario(usuarioModel: UsuarioModel) {
    try {
        const response = await instance.post('usuario/', {
            "email": usuarioModel.email,
            "usuario": usuarioModel.usuario,
            "senha": usuarioModel.senha
        });

        if (response.status !== 201) {
            throw new Error('Ocorreu um erro inesperado.');            
        }
    } catch(err) {
        console.log(err);
    }
}