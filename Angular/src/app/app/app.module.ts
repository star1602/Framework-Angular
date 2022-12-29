import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { UsuariosModule } from './usuarios/usuarios.module';
import { BotonComponent } from './boton/boton.component';




@NgModule({
  declarations: [
    AppComponent,
    PromocionesComponent,
    BotonComponent
  ],
  imports: [
    BrowserModule,
    UsuariosModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
