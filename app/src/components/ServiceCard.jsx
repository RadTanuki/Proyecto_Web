import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, CircleDollarSign, Info } from "lucide-react";
import PropTypes from "prop-types";

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
                <Info className="h-4 w-4"/>
                <h4>{service.descripcion}</h4>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CircleDollarSign className="h-4 w-4" /> 
                <h5>₡ {service.precioBase}</h5>
            </div>
        </CardContent>

        <CardFooter className="pt-3">
            <Button
                variant="ghost"
                className="w-full mt-4 group/btn bg-secondary/50 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
                Conocer más
                    
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