interface Smartphone {
    carica: number;
    numeroChiamate: number;
    costoMinuto: number;
  
    ricarica(euro: number): void;
    numero404(): string;
    getNumeroChiamate(): number;
    chiamata(min: number): void;
    azzeraChiamate(): void;
  }
  
  class SmartphoneClass implements Smartphone {
    carica: number;
    numeroChiamate: number;
    costoMinuto: number;
  
    constructor() {
      this.carica = 0;
      this.numeroChiamate = 0;
      this.costoMinuto = 0.20;
    }
  
    ricarica(euro: number): void {
      this.carica += euro;
    }
  
    numero404(): string {
      return `credito residuo: €${this.carica.toFixed(2)}`;
    }
  
    getNumeroChiamate(): number {
      return this.numeroChiamate;
    }
  
    chiamata(min: number): void {
      const costoChiamata = this.costoMinuto * min;
      if (costoChiamata <= this.carica) {
        this.carica -= costoChiamata;
        this.numeroChiamate++;
      } else {
        console.log("credito insufficiente");
      }
    }
  
    azzeraChiamate(): void {
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
  