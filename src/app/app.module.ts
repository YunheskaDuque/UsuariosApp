import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//personalizados
import { SharedModule } from './shared/shared.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



//cambiar local fecha pipe
import  localEs from '@angular/common/locales/es-CL';
import { registerLocaleData } from '@angular/common';
import { HomeModule } from './home/home.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { HttpClientModule } from '@angular/common/http';




registerLocaleData( localEs );

@NgModule({
  declarations: [
    AppComponent    
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    HttpClientModule,
    UsuariosModule 
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-CL'}], //registro de manera global
  bootstrap: [AppComponent]
})
export class AppModule { 

}
