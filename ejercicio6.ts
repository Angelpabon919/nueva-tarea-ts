class CuentaBancaria {
    constructor(private saldo: number) {}

    depositar(monto: number): void {
        this.saldo += monto;
    }

    retirar(monto: number): void {
        try {
            if (monto > this.saldo) {
                throw new Error("Saldo insuficiente");
            }
            this.saldo -= monto;
            console.log("Retiro exitoso Saldo: " + this.saldo);
        } catch (e) {
            console.log("Error bancario: " + (e as Error).message);
        }
    }
}