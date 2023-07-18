export const formatearFecha = fecha => {
    const fechaNueva = new Date(fecha);
    const opcionesFecha = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    };
    const opcionesHora = {
        hour: 'numeric',
        minute: 'numeric'
    };
    const fechaFormateada = fechaNueva.toLocaleDateString('es-ES', opcionesFecha);
    const horaFormateada = fechaNueva.toLocaleTimeString('es-ES', opcionesHora);
    return `${fechaFormateada} a las ${horaFormateada}`;
}
