import PropTypes from "prop-types";
import { ServiceCard } from "./ServiceCard";

export function ServicioList({ servicios }) {
    if (!servicios) {
        return <p>No hay datos disponibles.</p>;
    }

    if (servicios.length === 0) {
        return <p>No hay servicios para mostrar.</p>;
    }

    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicios.map((item) => (
                <ServiceCard key={item.id} service={item} />
            ))}
        </div>
    );
}

ServicioList.propTypes = {
    servicios: PropTypes.array.isRequired,
};