import propTypes from "prop-types"

export function RestriccionHorarioList({ restriccionesHorarias }){
    if (!restriccionesHorarias) {
        return <p>No hay datos disponibles</p>
    }
    if (restriccionesHorarias.length === 0){
        return <p>No hay restricciones para mostrar</p>
    }

    return (
        
        <div>
            {restriccionesHorarias.map((item) =>(
                <article key={item.id} event={item}>
                <p>Nombre: {item.nombre}</p>
                <p>Descripcion {item.descripcion}</p>
                </article>
            ))}
        </div>
    )
}

RestriccionHorarioList.propTypes={
    restriccionesHorarias:propTypes.array.isRequired
}