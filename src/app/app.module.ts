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
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
