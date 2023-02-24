import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
       { 
        path: 'usuarios', 
        component: UsersComponent 
      },
      { 
        path: '**', 
        redirectTo: 'usuarios' 
      }
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
