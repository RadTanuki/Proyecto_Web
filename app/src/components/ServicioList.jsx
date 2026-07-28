import PropTypes from "prop-types";

export function ServicioList({ servicios }) {
    if (!servicios) {
        return <p>No hay datos disponibles.</p>;
    }

    if (servicios.length === 0) {
        return <p>No hay servicios para mostrar.</p>;
    }

    return (
        <div>
            {servicios.map((item) => (
                <article key={item.id}>
                    <p><strong>Nombre:</strong> {item.nombre}</p>
                    <p><strong>Descripcion:</strong> {item.descripcion}</p>
                    <p><strong>Precio:</strong> ₡{item.precioBase}</p>
                    <p><strong>Duracion:</strong> {item.duracionMinutos} minutos</p>
                    <p><strong>Activo:</strong> {item.activo ? "Si" : "No"}</p>

                    {item.imagen && (
                        <img
                            src={`http://localhost:3000/uploads/${item.imagen}`}
                        />
                    )}

                    <hr />
                </article>
            ))}
        </div>
    );
}

ServicioList.propTypes = {
    servicios: PropTypes.array.isRequired,
};