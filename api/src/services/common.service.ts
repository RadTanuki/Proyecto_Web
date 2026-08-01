export function toDateOnly(value: string) {
    return new Date(`${value}T00:00:00`);
}

export function toTime(value: string) {
    const [hora, minuto] = value.split(":").map(Number);

    const fecha = new Date(0);

    fecha.setUTCHours(hora, minuto, 0, 0);

    return fecha;
}