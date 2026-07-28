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

//      {
//       "id": 2,
//       "nombre": "María",
//       "primerApellido": "López",
//       "segundoApellido": "Mora",
//       "correo": "maria@example.com",
//       "telefono": "8888-8888",
//       "activo": true,
//       "rolId": 3,
//       "creadoEn": "2026-07-28T01:47:54.285Z",
//       "actualizadoEn": "2026-07-28T01:47:54.285Z",
//       "rol": {
//         "id": 3,
//         "nombre": "Cliente",
//         "descripcion": "Usuario que puede consultar sus citas y cancelarlas cuando corresponda.",
//         "activo": true
//       },
//       "empleado": null
//     }

UsuarioList.propTypes={
    usuario:propTypes.array.isRequired
}