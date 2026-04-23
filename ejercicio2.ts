function sumarArreglo(numeros: number[]): number | string {
    try {
        let total = 0;
        numeros.forEach(num => {
            total += num;
        });
        return total;
    } catch (e) {
        return "Error al sumar: " + (e as Error).message;
    }
}
console.log(sumarArreglo([1, 2, 3]));