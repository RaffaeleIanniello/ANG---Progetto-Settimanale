"use strict";
class SmartphoneClass {
    constructor() {
        this.carica = 0;
        this.numeroChiamate = 0;
        this.costoMinuto = 0.20;
    }
    ricarica(euro) {
        this.carica += euro;
    }
    numero404() {
        return `credito residuo: €${this.carica.toFixed(2)}`;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    chiamata(min) {
        const costoChiamata = this.costoMinuto * min;
        if (costoChiamata <= this.carica) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
        }
        else {
            console.log("credito insufficiente");
        }
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
const mioTelefono = new SmartphoneClass();
mioTelefono.ricarica(30);
console.log(mioTelefono.numero404());
mioTelefono.chiamata(3);
console.log(mioTelefono.numero404());
console.log(mioTelefono.getNumeroChiamate());
mioTelefono.chiamata(10);
mioTelefono.azzeraChiamate();
console.log(mioTelefono.getNumeroChiamate());
