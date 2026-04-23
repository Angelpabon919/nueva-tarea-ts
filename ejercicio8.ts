function obtenerUltimo<T>(arreglo: T[]): T | string {
    try {
        if (arreglo.length === 0) throw new Error("Arreglo vacío");
        return arreglo[arreglo.length - 1];
    } catch (e) {
        return "Error genérico: " + (e as Error).message;
    }
}