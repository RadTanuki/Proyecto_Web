import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getServiceById } from "@/services/serviciosService";
import { AlertCircle, CircleDollarSign, Clock4, Info, SquareUserRound, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function ServiceDetailPage() {

    const { id } = useParams();
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadService() {
            try {
                setLoading(true);
                setError("");
                const data = await getServiceById(id);
                if (!data) {
                    setService(null);
                    return;
                }
                setService(data.data);
            } catch {
                setError("Error al cargar el servicio.");
            } finally {
                setLoading(false);
            }
        }
        loadService();
    }, [id]);

    if (loading) {
        return <p className="text-muted-foreground">Cargando detalle del servicio...</p>;
    }
    if (error) {
        return <AlertCircle>{error}</AlertCircle>;
    }
    if (!service) {
        return (
            <section className="space-y-4">
                <h2>No hay un servicios relacionado al ID obtenido</h2>
                <Button asChild variant="outline">
                    <Link to="/services">Volver a servicios</Link>
                </Button>
            </section>
        );
    }

    return (
        <section className="flex flex-col items-center gap-6">

            <h1 className=" text-3xl m-15">Detalles del servicio seleccionado</h1>

            <Card className="rounded-[40px] border overflow-hidden">
                {/* {service.imageUrl && (
                    <img
                        src={`${IMAGE_URL}/${service.imageUrl}`}
                        alt={service.title}
                        className="h-72 w-full object-cover"
                    />
                )} */}

                <CardHeader>
                    <CardTitle className="text-center text-2xl">{service.nombre}</CardTitle>
                </CardHeader>

                <CardContent className="text-xl space-y-6">

                    {service.descripcion && (
                        <p className="flex items-start gap-2 leading-relaxed text-muted-foreground">
                            <Info className="h-5 w-5 mt-1 shrink-0" />
                            <span >{service.descripcion}</span>
                        </p>
                    )}

                    <div className="grid grid-cols-2 gap-10">

                        <p className="flex items-center gap-2">
                            <CircleDollarSign className="h-4 w-4" />
                            <h5>Precio Base: ₡{service.precioBase}</h5>
                        </p>

                        <p className="flex items-center gap-2">
                            <Clock4 className="h-4 w-4" />
                            Duración: {service.duracionMinutos} minutos
                        </p>

                        <p className="flex items-center gap-2">
                            <Star className="h-4 w-4 text-primary" />
                            Especialidad: {service.especialidad.nombre}
                        </p>

                        {service.empleados?.length > 0 && (
                            <div>
                                <h3 className="text-center">Instructor(es)</h3>

                                {service.empleados.map((empleado) => (
                                    <p key={empleado.id} className="flex items-start gap-2">
                                        <SquareUserRound className="h-4 w-4 text-primary mt-1" />

                                        <div>
                                            <p>
                                                {empleado.usuario.nombre} {empleado.usuario.primerApellido} {empleado.usuario.segundoApellido}
                                            </p>

                                            <p className="ml-4 text-sm">
                                                {empleado.descripcion}
                                            </p>
                                        </div>

                                    </p>
                                ))}
                            </div>
                        )}
                    </div>

                </CardContent>
            </Card>
        </section>
    );

}