import { ServicioList } from "@/components/ServicioList";
import { getServicios } from "@/services/serviciosService";
import { useEffect, useState } from "react";

export function ServicesPage () {

    const [services, setServices] = useState([]);
    /*Aun no la usamos 
    const [search, setSearch] = useState("");*/

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchServices() {
            try {
                setLoading(true);
                const data = await getServicios();
                console.log(data);
                setServices(data.data);
            } catch (error) {
                console.error("Error al cargar los servicios", error);
                setError("Error al cargar los servicios");
            } finally {
                setLoading(false);
            }
        }
        fetchServices();
    }, []);

    if (loading) return <p className="text-center text-gray-500">Cargando servicios...</p>
    if (error) return <p className="text-center text-red-500">{error}</p>

    return (
        <section className="container mx-auto px-6 py-10">
            <ServicioList servicios={services} />
        </section>
    );

}