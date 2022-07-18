import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { Login } from '../modelo/login';
import { NuevoUsuario } from '../modelo/NuevoUser';
import { Jwt } from '../modelo/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url:string='https://young-springs-43997.herokuapp.com/api/auth/';
 
  constructor(private http:HttpClient) { }

  public nuevoUsuario(nuevoUsuario: NuevoUsuario): Observable<NuevoUsuario> {
    return this.http.post<NuevoUsuario>(this.url + 'registrar', nuevoUsuario);
    
  }

login(loginUsuario: Login): Observable<Jwt> {
    return this.http.post<Jwt>(this.url + 'login', loginUsuario);
  }



}
