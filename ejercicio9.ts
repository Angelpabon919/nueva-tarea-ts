class Estudiante {
    constructor(public nombre: string, public nota: number) {}

    resultado(): string {
        try {
            return this.nota >= 3 ? "Aprobado" : "Reprobado";
        } catch (e) {
            return "Error en nota: " + (e as Error).message;
        }
    }
}