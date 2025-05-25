import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { AdopcionesComponent } from './components/adopciones/adopciones.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'adopciones', component: AdopcionesComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'contacto', component: ContactoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
