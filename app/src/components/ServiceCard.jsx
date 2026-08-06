import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, CircleDollarSign, Info, Clock4, BadgeInfo } from "lucide-react";
import { Link } from "react-router-dom";

export function ServiceCard({ service }) {

    return (
        <Card className="w-full max-w-sm rounded-[24px] relative group overflow-hidden border-border bg-card text-card-foreground hover:border-primary/50 hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative h-48 w-full overflow-hidden bg-muted">
                <Button
                    variant="outline"
                    size="icon"
                    className='absolute top-2 right-2 rounded-full
                    bg-background/80 backdrop-blur'
                >
                    <Heart
                        className='w-4 h-4 text-red-500'
                    />

                </Button>
            </div>

            <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
                    {service.nombre}
                </CardTitle>
            </CardHeader>

            <CardContent className="grid gap-2.5">

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CircleDollarSign className="h-4 w-4" />
                    <h5>₡{service.precioBase}</h5>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock4 className="h-4 w-4" />
                    <h5>{service.duracionMinutos}</h5>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Info className="h-4 w-4" />
                    <h4>{service.descripcion}</h4>
                </div>

            </CardContent>

            <CardFooter className="pt-3">
                <Button
                    asChild
                    variant="ghost"
                    className="w-full mt-4 rounded-full border bg-secondary/50 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
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