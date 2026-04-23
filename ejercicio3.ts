interface Persona {
    nombre: string;
    edad: number;
    saludar(): string;
}

try {
    let persona1: Persona = {
        nombre: "Ángela",
        edad: 20,
        saludar() {
            return "Hola, soy " + this.nombre;
        }
    };
    console.log(persona1.saludar());
} catch (e) {
    console.log("Error en Persona: " + (e as Error).message);
}