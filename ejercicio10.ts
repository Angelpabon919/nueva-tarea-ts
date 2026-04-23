interface Respuesta<T> {
    data: T;
    status: number;
}

try {
    let respuesta1: Respuesta<string> = { data: "Todo ok", status: 200 };
    let respuesta2: Respuesta<number> = { data: 500, status: 500 };
    console.log(respuesta1, respuesta2);
} catch (e) {
    console.log("Error en Respuesta: " + (e as Error).message);
}