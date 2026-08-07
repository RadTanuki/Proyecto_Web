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

            <Card className="w-full max-w-3xl rounded-[40px]">
                {/* {service.imageUrl && (
                    <img
                        src={`${IMAGE_URL}/${service.imageUrl}`}
                        alt={service.title}
                        className="h-72 w-full object-cover"
                    />
                )} */}

                <CardHeader>
                    <CardTitle className="text-center text-3xl mt-2">{service.nombre}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-12 p-10 text-xl">

                    {service.descripcion && (
                        <div className="flex justify-center">
                            <p className="flex items-center gap-2 max-w-3xl leading-relaxed text-muted-foreground text-2xl">
                                <Info className="h-7 w-7 shrink-0" />
                                <span>{service.descripcion}</span>
                            </p>
                        </div>
                    )}

                    <div className="grid grid-cols-2 gap-x-12 gap-y-8 place-items-center">

                        <div className="flex items-center gap-3">
                            <CircleDollarSign className="h-7 w-7 shrink-0" />
                            Precio Base: ₡{service.precioBase}
                        </div>

                        <p className="flex items-center gap-2">
                            <Clock4 className="h-7 w-7 shrink-0" />
                            Duración: {service.duracionMinutos} minutos
                        </p>

                        <p className="flex items-center gap-2">
                            <Star className="h-7 w-7 text-primary shrink-0" />
                            Especialidad: {service.especialidad.nombre}
                        </p>

                        {service.empleados?.length > 0 && (
                            <div>
                                <h3 className="text-center">Empleados: </h3>

                                {service.empleados.map((empleado) => (
                                    <p key={empleado.id} className="flex items-start gap-3">
                                        <SquareUserRound className="h-7 w-7 text-primary shrink-0" />

                                        <div>
                                            <p>
                                                {empleado.usuario.nombre} {empleado.usuario.primerApellido} {empleado.usuario.segundoApellido}
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