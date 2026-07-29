import propTypes from "prop-types"

export function UsuarioList({ usuario }){
    if (!usuario) {
        return <p>No hay datos disponibles</p>
    }
    if (usuario.length === 0){
        return <p>No hay usuarios para mostrar</p>
    }

    return (
        <div>
            {usuario.map((item) =>(
                <article key={item.id} event={item}>
                <p>Nombre: {item.nombre}</p>
                <p>Primer Apellido: {item.primerApellido}</p>
                <p>Segundo Apellido: {item.segundoApellido}</p>
                <p>Correo de Usuario: {item.correo}</p>
                <p>Estado: {item.activo ? "Activo" : "Inactivo"}</p>
                <p>Telefono: {item.telefono}</p>
                </article>
            ))}
        </div>
    )
}

UsuarioList.propTypes={
    usuario:propTypes.array.isRequired
}