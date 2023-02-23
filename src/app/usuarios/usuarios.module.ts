import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsersComponent } from './pages/users/users.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    UsersComponent,
   
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    PrimeNgModule,
    FormsModule,
  ]
})
export class UsuariosModule { }
