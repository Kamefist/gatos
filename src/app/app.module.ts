import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AdopcionesComponent } from './components/adopciones/adopciones.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { InicioComponent } from './components/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NoticiasComponent,
    NosotrosComponent,
    ContactoComponent,
    AdopcionesComponent,
    GaleriaComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
