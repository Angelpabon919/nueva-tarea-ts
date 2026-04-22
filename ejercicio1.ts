let dato: number | string = "hola";
function procesar(valor: number | string): number | string {
    if (typeof valor === "number") {
        return valor * 2;
    } else {
        return valor.toUpperCase();
    }
}

console.log(procesar(dato));

dato = 10;
console.log(procesar(dato));