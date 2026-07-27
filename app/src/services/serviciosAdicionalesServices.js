const API_URL=import.meta.env.VITE_API_URL;
export async function getServiciosAdicionales() {
    try {
        const response = await fetch(`${API_URL}/servicios-adicionales`);
        
        //Si la respuestá no está okay, se cayó
        if (!response.ok) {
            throw new Error();
        }
        return await response.json();
    } catch (error) {
        console.log("Error al obtener servicios adicionales", error);
        throw new Error("Error al obtener servicios adicionales", { cause: error });
    }
}
