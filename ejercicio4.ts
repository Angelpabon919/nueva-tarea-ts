interface Producto {
    nombre: string;
    precio: number;
}

function filtrarProductos(lista: Producto[]): void {
    try {
        lista.forEach(p => {
            if (p.precio > 50) {
                console.log(p.nombre + " es caro: " + p.precio);
            }
        });
    } catch (e) {
        console.log("Error en productos: " + (e as Error).message);
    }
}
filtrarProductos([{ nombre: "maracuya", precio: 2000 }, { nombre: "Arroz", precio: 2500 }]);