const API_URL=import.meta.env.VITE_API_URL;
export async function getTiposRestriccionHorario() {
    try {
        const response = await fetch(`${API_URL}/tipos-restriccion-horario`);
        
        //Si la respuestá no está okay, se cayó
        if (!response.ok) {
            throw new Error();
        }
        return await response.json();
    } catch (error) {
        console.log("Error al obtener el tipo de restricción por horario", error);
        throw new Error("Error al obtener el tipo de restricción por horario", { cause: error });
    }
}