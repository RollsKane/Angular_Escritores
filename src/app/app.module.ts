import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEscritoresComponent } from './lista-escritores/lista-escritores.component';
import { DetalleEscritorComponent } from './detalle-escritor/detalle-escritor.component';
import { ListaLibrosComponent } from './lista-libros/lista-libros.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEscritoresComponent,
    DetalleEscritorComponent,
    ListaLibrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
