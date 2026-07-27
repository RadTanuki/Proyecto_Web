import { useEffect, useState } from "react";
import { getTiposRestriccionHorario } from "../services/tipoRestriccionHorarioService";
import { RestriccionHorarioList } from "../components/RestriccionHorarioList";

export function ListadosPage(){
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    const [restriccionHorario, setRestriccionHorario] = useState([])
    


    useEffect(() => {
        async function fetchRestriccionHorario() {
            try {
                setLoading(true)
                const data = await getTiposRestriccionHorario()
                console.log(data)
                setRestriccionHorario(data.data)
                console.log("Si se cargaron wey")
            } catch (error) {
                console.error("Error al cargar restricciones de horario", error)
                setError("Error al cargar restricciones de horario")
            } finally {
                setLoading(false)
            }
        }
        fetchRestriccionHorario()
    }, [])

    console.log("Estado restriccionHorario:", restriccionHorario);
    if (loading) return <p className="text-center text-gray-500">Cargando eventos...</p>
    if (error) return <p className="text-center text-red-500">{error}</p>
    return (
        <section>
            <header>Hay que hacer un header xd</header>
            <RestriccionHorarioList restriccionesHorarias={restriccionHorario} />
        </section>
    )
}