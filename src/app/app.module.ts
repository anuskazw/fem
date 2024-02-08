import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeThemeModeComponent } from './shared/components/change-theme-mode/change-theme-mode.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { HistoriaComponent } from './pages/historia/historia.component';
import { ConceptosComponent } from './pages/conceptos/conceptos.component';
import { ViolenciaComponent } from './pages/violencia/violencia.component';
import { RecursosComponent } from './pages/recursos/recursos.component';
import { EncuentrosComponent } from './pages/encuentros/encuentros.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { PeliculasComponent } from './pages/recursos/peliculas/peliculas.component';
import { LibrosComponent } from './pages/recursos/libros/libros.component';
import { RedesComponent } from './pages/recursos/redes/redes.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangeThemeModeComponent,
    PrincipalComponent,
    HistoriaComponent,
    ConceptosComponent,
    ViolenciaComponent,
    RecursosComponent,
    EncuentrosComponent,
    ProyectosComponent,
    PeliculasComponent,
    LibrosComponent,
    RedesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
