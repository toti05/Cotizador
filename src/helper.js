//obtiene la diferencia de años
export function obtenerDiferenciaYear(year) {
    return new Date().getFullYear() - year;
}

//calcula el total a pagar segun la marca
export function calcularMarca(marca) {
    let incremento;

    if (marca === 'europeo') {
        incremento = 1.30;
    } else if (marca === 'americano') {
        incremento = 1.15;
    } else {
        incremento = 1.05;
    }
    return incremento;
}

// Calcula el tipo de seguro
export function obtenerPlan(plan) {
    return (plan === 'basico') ? 1.20 : 1.50;
}

//primera letra en mayuscula
export function primerMayuscula(texto) {
    return texto.chartAt(0).toUpperCase() + texto.slice(1);
}