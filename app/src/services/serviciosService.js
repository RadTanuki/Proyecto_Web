const API_URL=import.meta.env.VITE_API_URL;
export async function getServicios() {
    try {
        const response = await fetch(`${API_URL}/servicios`);
        //Si la respuestá no está okay, se cayó
        if (!response.ok) {
            throw new Error();
        }
        return await response.json();
    } catch (error) {
        console.log("Error al obtener servicios", error);
        throw new Error("Error al obtener servicios", { cause: error });
    }
}