import instance from "..";

export default async function getUsuarioByEmail(email: string) {
    try {
        const response = await instance.get(`/usuario/email/${email}`);
        return response.data;
    } catch(err) {
        console.log(err);
    }
    
}