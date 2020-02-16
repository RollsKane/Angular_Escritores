import { Injectable } from '@angular/core';
import { LIBROS } from "./db/libros.db";
import { Libro } from "./models/libro.model";

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor() { }

  getBooksByIdPromise(pId: number): Promise<Libro[]> {
    const prom = new Promise<Libro[]>((resolve, reject) => {
      resolve(LIBROS.filter(item => item.escritor === pId));
      
    });
    return prom;
  }

  
}
