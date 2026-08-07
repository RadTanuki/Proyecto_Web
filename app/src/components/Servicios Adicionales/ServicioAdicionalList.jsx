import PropTypes from "prop-types"
import { ServicioAdicionalCard } from "./ServicioAdicionalCard"

export function ServicioAdicionalList({ serviciosAdicionales }){
    if (!serviciosAdicionales) {
        return <p>No hay datos disponibles</p>
    }
    if (serviciosAdicionales.length === 0){
        return <p>No hay servicios adicionales para mostrar</p>
    }

    return (
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {serviciosAdicionales.map((item) => (
                        <ServicioAdicionalCard key={item.id} servicioAdicional={item}  />
                    ))}
        </div>

    )
}
ServicioAdicionalList.propTypes={
    serviciosAdicionales:PropTypes.array.isRequired
}