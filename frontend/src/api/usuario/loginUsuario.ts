import instance from "..";
import UsuarioModel from "@/model/UsuarioModel";

export default async function loginUsuario(usuarioModel: UsuarioModel) {
    try {
        const response = await instance.post('auth/login', {
            "email": usuarioModel.email,
            "senha": usuarioModel.senha
        });
        if (response.status !== 200) {
            throw new Error('Ocorreu um erro inesperado.');            
        }
        return await response.data.acess_token;
    } catch(err) {
        console.log(err);
    }
}