import { Component, OnInit } from "@angular/core";
import { Escritor } from "../models/escritor.model";
import { EscritoresService } from "../escritores.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-lista-escritores",
  templateUrl: "./lista-escritores.component.html",
  styleUrls: ["./lista-escritores.component.css"]
})
export class ListaEscritoresComponent implements OnInit {
  listaEscritores: Escritor[];

  numerillo: number;

  constructor(
    private escritoresService: EscritoresService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.listaEscritores = await this.escritoresService.getAllPromise();
    console.log(this.listaEscritores);
  }

  manejarCampoTexto($event) {
    this.listaEscritores = [];
    this.escritoresService
      .getByCountry($event.target.value)
      // tslint:disable-next-line: no-shadowed-variable
      .then(ESCRITORES => {
        this.listaEscritores = ESCRITORES;
        //console.log(ESCRITORES);
      });
  }

  manejarNombre($event) {
    this.listaEscritores = [];
    this.escritoresService
      .getByName($event.target.value)
      // tslint:disable-next-line: no-shadowed-variable
      .then(ESCRITORES => {
        this.listaEscritores = ESCRITORES;
        //console.log(ESCRITORES);
      });
  }

  async manejarIds($event) {
    this.router.navigate(["/detalle-escritor/" + $event.target.value]);
    console.log($event.target.value);
  }

  cambiarURL($event) {
    this.router.navigate(["escritor/" + $event.target.id]);
    console.log($event.target.value);
  }
}
