import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrincipalComponent} from "./pages/principal/principal.component";
import {HistoriaComponent} from "./pages/historia-2/historia.component";
import {ConceptosComponent} from "./pages/conceptos/conceptos.component";
import {ViolenciaComponent} from "./pages/violencia/violencia.component";
import {RecursosComponent} from "./pages/recursos/recursos.component";
import {EncuentrosComponent} from "./pages/encuentros/encuentros.component";
import {ProyectosComponent} from "./pages/proyectos/proyectos.component";

const routes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  { path: 'principal', component: PrincipalComponent },
  { path: 'historia', component: HistoriaComponent },
  { path: 'conceptos', component: ConceptosComponent },
  { path: 'violencia', component: ViolenciaComponent },
  { path: 'recursos', component: RecursosComponent },
  { path: 'encuentros', component: EncuentrosComponent },
  { path: 'proyectos', component: ProyectosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
