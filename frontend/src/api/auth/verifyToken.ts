import instance from "..";

export default async function verifyToken(token: string) {
    try {
        const valid = await instance.post('/auth/profile', {
            "token": token
        });
        return valid.data;
    } catch(err) {
        throw new Error('Falha na comunicação.');
    }
}