import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Escritor } from "../models/escritor.model";
import { EscritoresService } from "../escritores.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-detalle-escritor",
  templateUrl: "./detalle-escritor.component.html",
  styleUrls: ["./detalle-escritor.component.css"]
})
export class DetalleEscritorComponent implements OnInit {
  idEscritor: Escritor;

  botoncito: boolean;

  constructor(
    private activateRoute: ActivatedRoute,
    private escritoresServices: EscritoresService,
    private location: Location
  ) {
    this.botoncito = true;
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(async params => {
      console.log(params);
      this.idEscritor = await this.escritoresServices.getByIdPromise(
        parseInt(params.escritorId)
      );
      // Devuelve los parametros variables de la url
      console.log(this.idEscritor);
    });
  }

  botonazo() {
    this.botoncito = !this.botoncito;
    console.log(this.botoncito);
  }

  goBack() {
    this.location.back();
  }
}
