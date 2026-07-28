import PropTypes from "prop-types"

export function ServicioAdicionalList({ serviciosAdicionales }){
    if (!serviciosAdicionales) {
        return <p>No hay datos disponibles</p>
    }
    if (serviciosAdicionales.length === 0){
        return <p>No hay servicios adicionales para mostrar</p>
    }
    

    return (
        
        <div>
            {serviciosAdicionales.map((item) =>(
                <article key={item.id} event={item}>
                <p>Nombre: {item.nombre}</p>
                <p>Descripcion: {item.descripcion}</p>
                <p>Precio: {item.precio}</p>
                <p>Disponibilidad: {item.activo ? "Disponible" : "No disponible"} </p>
                <p>Servicio disponible desde: {item.creadoEn}</p>
                <p>Servicio actualizado en: {item.actualizadoEn}</p>
                </article>
            ))}
        </div>
    )
}
ServicioAdicionalList.propTypes={
    serviciosAdicionales:PropTypes.array.isRequired
}