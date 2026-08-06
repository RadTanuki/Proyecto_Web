import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Info, Clock4, BadgeInfo, Banknote } from "lucide-react";
import { Link } from "react-router-dom";

export function ServiceCard({ service }) {

    return (
        <Card className="w-full max-w-sm h-full flex flex-col rounded-[24px] relative group overflow-hidden border-border bg-card text-card-foreground hover:border-primary/50 hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative h-48 w-full overflow-hidden bg-muted">
               
                    <p
                        className={`flex w-15 text-center font-bold rounded-full px-3 py-1 text-sm 
                            ${service.activo ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700" }`}
                    >
                        {service.activo ? "Activo" : "Inactivo"}
                    </p>

               
            </div>

            <CardHeader className="pb-3">
                <CardTitle className="text-2xl text-center font-bold tracking-tight group-hover:text-primary transition-colors">
                    {service.nombre}
                </CardTitle>
            </CardHeader>

            <CardContent className="grid gap-2.5 flex-1">

                <div className="flex items-center gap-2 text-xl text-muted-foreground">
                    <Banknote className="h-7 w-7" />
                    <h5 className="ml-3">Precio base: ₡{service.precioBase}</h5>
                </div>

                <div className="flex items-center gap-2 text-xl text-muted-foreground">
                    <Clock4 className="h-7 w-7" />
                    <h5 className="ml-3">Duración: {service.duracionMinutos} minutos</h5>
                </div>

                <div className="flex items-center gap-2 text-xl text-muted-foreground">
                    <Info className="h-7 w-7 shrink-0" />
                    <h5 className="ml-3">{service.descripcion}</h5>
                </div>

            </CardContent>

            <CardFooter className="pt-3 mt-auto">
                <Button
                    asChild
                    variant="ghost"
                    className="w-full mt-4 rounded-full border bg-secondary/50 
                    text-lg py-5
                    hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                    <Link
                        to={`/services/${service.id}`}
                        className="flex items-center justify-center gap-2"
                    >
                        <span>Conocer más</span>
                        <BadgeInfo className="h-4 w-4" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>

    );

}

/*ServiceCard.propTypes = {

    service: PropTypes.shape({

        nombre: PropTypes.string.isRequired,
        descripcion: PropTypes.string.isRequired,
        precio: PropTypes.


    })



}*/