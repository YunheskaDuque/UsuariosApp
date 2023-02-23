import { Component} from '@angular/core';
import { Usuarios } from '../../interfaces/users.interfaces';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [`

  li {
    cursor: pointer;
  }

`]
})
export class UsersComponent{

  termino: string = '';
  usuarios: Usuarios[] = [];
  event: string[] = [];

  mostrarSugerencias: boolean = false;

constructor( private UsuariosService: UsuariosService ) {}

buscar( termino: string) {

   console.log(this.termino);

  this.UsuariosService.buscarNombre( this.termino )
                     .subscribe( (usuarios) => {
                        console.log(usuarios);
                        this.usuarios = usuarios;
});
}
}
   
  

 

   
 