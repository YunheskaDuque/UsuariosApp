import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuarios } from '../interfaces/users.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  
private _apiUrl: string = 'https://jsonplaceholder.typicode.com';

constructor( private http: HttpClient ) { }

buscarNombre( termino: string ): Observable<Usuarios[]> {
  const url = `${this._apiUrl}/users?name_like=${termino}`;
  return this.http.get<Usuarios[]>( url );
}


}