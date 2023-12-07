import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EgresoComponent } from './egreso/egreso.component';
import { CrearEgresoComponent } from './egreso/crear-egreso/crear-egreso.component';
import { ObtenerEgresoComponent } from './egreso/obtener-egreso/obtener-egreso.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { ObtenerUsuarioComponent } from './usuarios/obtener-usuario/obtener-usuario.component';
import { NombreDelComponenteComponent } from './nombre-del-componente/nombre-del-componente.component';
import { ModuleComponent } from './module/module.component';

@NgModule({
  declarations: [
    AppComponent,
    EgresoComponent,
    CrearEgresoComponent,
    ObtenerEgresoComponent,
    UsuariosComponent,
    CrearUsuarioComponent,
    ObtenerUsuarioComponent,
    NombreDelComponenteComponent,
    ModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
