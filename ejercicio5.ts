interface Empleado {
    nombre: string;
    salario: number;
}

function verificarSalario(emp: Empleado): string {
    try {
        return emp.salario > 2000 ? "Salario Alto" : "Salario Bajo";
    } catch (e) {
        return "Error: " + (e as Error).message;
    }
}