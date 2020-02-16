import { Component, OnInit } from "@angular/core";
import { Libro } from "../models/libro.model";
import { LibrosService } from "../libros.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-lista-libros",
  templateUrl: "./lista-libros.component.html",
  styleUrls: ["./lista-libros.component.css"]
})
export class ListaLibrosComponent implements OnInit {
  listaLibros: Libro[];

  constructor(
    private librosService: LibrosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.parent.params.subscribe(async params => {
      console.log(params.escritorId);
      this.listaLibros = await this.librosService.getBooksByIdPromise(
        parseInt(params.escritorId)
      );
      console.log(this.listaLibros);
    });
  }
}
