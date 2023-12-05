import instance from "..";

export default async function getAllChats() {
    try {
        const response = await instance.get('/chat');
        return response.data;
    } catch (err) {
        throw new Error('Falha na requisição.');
    }
}