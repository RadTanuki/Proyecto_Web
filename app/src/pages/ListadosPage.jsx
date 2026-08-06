import { useEffect, useState } from "react";
import { getTiposRestriccionHorario } from "../services/tipoRestriccionHorarioService";
import { RestriccionHorarioList } from "../components/RestriccionHorarioList";
import { getServiciosAdicionales } from "../services/serviciosAdicionalesServices";
import { ServicioAdicionalList } from "../components/ServicioAdicionalList";
import { getUsuarios } from "../services/usuariosService";
import { UsuarioList } from "../components/UsuarioList";
import { getServicios } from "../services/serviciosService";
import { ServicioList } from "../components/Servicios/ServicioList";

export function ListadosPage(){
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    const [restriccionHorario, setRestriccionHorario] = useState([])
    const [servicioAdicional, setServicioAdicional] = useState([])
    const [usuario, setUsuario] = useState ([])
    const [servicio, setServicio] = useState([])
    
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

        async function fetchServiciosAdicionales() {
            try {
                const data = await getServiciosAdicionales();
                setServicioAdicional(data.data)
                console.log("Se cargaron?")
            } catch (error) {
                console.error("Error al cargar restricciones de horario", error)
                setError("Error al cargar restricciones de horario")
            }
        }

        fetchServiciosAdicionales()

        async function fetchUsuarios() {
            try {
                const data = await getUsuarios()
                console.log(data)
                setUsuario(data.data)
                console.log("Si se cargaron wey por favor")
            } catch (error) {
                console.error("Error al cargar usuarios", error)
                setError("Error al cargar usuarios")
            }
        }
        fetchUsuarios()

        async function fetchServicios() {
            try {
                const data = await getServicios()
                console.log(data)
                setServicio(data.data)
                console.log("Si se cargaron wey por favor")
            } catch (error) {
                console.error("Error al cargar servicios", error)
                setError("Error al cargar servicios")
            }
        }

        fetchServicios()
        
    }, [])

        

    console.log("Estado restriccionHorario:", restriccionHorario);
    console.log("Estado serviciosAdicionales:", servicioAdicional);
    console.log("Estado servicios:", servicio)
    
    if (loading) return <p className="text-center text-gray-500">Cargando eventos...</p>
    if (error) return <p className="text-center text-red-500">{error}</p>
    return (
        <section>
            <header>Hay que hacer un header xd</header>
            <RestriccionHorarioList restriccionesHorarias={restriccionHorario} />
            <hr />
            <ServicioAdicionalList serviciosAdicionales={servicioAdicional}/>
            <hr />
            <UsuarioList usuario={usuario}/>
            <hr />
            <ServicioList servicios={servicio}></ServicioList>
        </section>
    )
}