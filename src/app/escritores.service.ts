import { Injectable } from "@angular/core";
import { ESCRITORES } from "./db/escritores.db";
import { Escritor } from "./models/escritor.model";
import { Libro } from "./models/libro.model";

@Injectable({
  providedIn: "root"
})
export class EscritoresService {
  constructor() {}

  getAll(): Escritor[] {
    return ESCRITORES;
  }

  getAllPromise(): Promise<Escritor[]> {
    const prom = new Promise<Escritor[]>((resolve, reject) => {
      resolve(ESCRITORES);
    });
    return prom;
  }

  getByCountry(pCountry: string): Promise<Escritor[]> {
    const prom = new Promise<Escritor[]>((resolve, reject) => {
      const arrFiltrado = ESCRITORES.filter(item => {
        const pais = item.pais;

        return pais.toLowerCase().includes(pCountry.toLowerCase());
      });
      resolve(arrFiltrado);
    });
    return prom;
  }

  getByName(pName: string): Promise<Escritor[]> {
    const prom = new Promise<Escritor[]>((resolve, reject) => {
      const arrFiltrado = ESCRITORES.filter(item => {
        // Filtro en minusculas, sin espacio e incluyendo nombres y apellidos
        const nombreCompleto = this.eliminarDiacriticos(
          this.eliminarEspacios(item.nombre + item.apellidos)
        );
        const pNameNew = this.eliminarDiacriticos(this.eliminarEspacios(pName));

        return nombreCompleto.toLowerCase().includes(pNameNew.toLowerCase());
      });
      resolve(arrFiltrado);
    });
    return prom;
  }

  eliminarEspacios(pCadena: string): string {
    const regex = / /g; // reemplazar espacios con una expresión regular
    // "g" es global e "i" es insensitive (que le dan igual mayusculas o minusculas)

    return pCadena.replace(regex, "");
  }

  eliminarDiacriticos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  getByIdPromise(pId: number): Promise<Escritor> {
    const prom = new Promise<Escritor>((resolve, reject) => {
      resolve(ESCRITORES.find(item => item.id === pId));
    });
    return prom;
  }
}
