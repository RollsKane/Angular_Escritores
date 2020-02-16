import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListaEscritoresComponent } from "./lista-escritores/lista-escritores.component";
import { DetalleEscritorComponent } from "./detalle-escritor/detalle-escritor.component";
import { ListaLibrosComponent } from "./lista-libros/lista-libros.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "escritores" },
  { path: "escritores", component: ListaEscritoresComponent },
  {
    path: "detalle-escritor/:escritorId",
    component: DetalleEscritorComponent,
    children: [{ path: "libros", component: ListaLibrosComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
