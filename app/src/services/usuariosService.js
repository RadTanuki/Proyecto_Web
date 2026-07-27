const API_URL=import.meta.env.VITE_API_URL;
export async function getUsuarios() {
    try {
        const response = await fetch(`${API_URL}/usuarios`);
        
        //Si la respuestá no está okay, se cayó
        if (!response.ok) {
            throw new Error();
        }
        return await response.json();
    } catch (error) {
        console.log("Error al obtener usuarios", error);
        throw new Error("Error al obtener usuarios", { cause: error });
    }
}