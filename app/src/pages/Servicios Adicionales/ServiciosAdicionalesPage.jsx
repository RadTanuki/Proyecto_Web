import { getServiciosAdicionales } from "@/services/serviciosAdicionalesServices";
import { useEffect, useState } from "react";
import { ServicioAdicionalList } from "@/components/Servicios Adicionales/ServicioAdicionalList";

export function ServiciosAdicionalesPage() {

    const [serviciosAdicional, setServicioAdicional] = useState([])
    /*Aun no la usamos 
    const [search, setSearch] = useState("");*/

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchServiciosAdicionales() {
            try {
                setLoading(true);
                const data = await getServiciosAdicionales();
                setServicioAdicional(data.data)
                console.log("Se cargaron?")
            } catch (error) {
                console.error("Error al cargar los servicios adicionales", error)
                setError("Error al cargar los servicios adicionales")
            } finally {
                setLoading(false);
            }
        }
        fetchServiciosAdicionales();
    }, []);

    if (loading) return <p className="text-center text-gray-500">Cargando servicios...</p>
    if (error) return <p className="text-center text-red-500">{error}</p>

    return (
        <section className="container mx-auto px-6 py-10">
            <ServicioAdicionalList serviciosAdicionales={serviciosAdicional} />
        </section>
    );

}