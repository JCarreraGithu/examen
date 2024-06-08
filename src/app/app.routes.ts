import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './page/perfil/perfil.component';
import { HojaComponent } from './page/hoja/hoja.component';

const routes: Routes = [
  { path: 'perfil', component: PerfilComponent },
  { path: 'hoja', component: HojaComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes { }
