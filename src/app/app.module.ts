import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import {NavegacionComponent} from "./navegacion/navegacion.component";
import {HojaComponent} from "./page/hoja/hoja.component";
import {PerfilComponent} from "./page/perfil/perfil.component";



@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    HojaComponent,
    PerfilComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutes,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
