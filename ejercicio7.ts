interface Empresa {
    nombre: string;
    empleados: Empleado[];
}

function mostrarEmpleados(empresa: Empresa): void {
    try {
        empresa.empleados.forEach(e => console.log(e.nombre));
    } catch (e) {
        console.log("Error en empresa: " + (e as Error).message);
    }
}