import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../modelo/login';
import { Jwt } from '../modelo/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url:string='http://localhost:8080/api/auth/';

  constructor(private http:HttpClient) { }
/*
  public nuevoUsuario(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.http.post<any>(this.authURL + 'registrar', nuevoUsuario);
  }
*/
login(loginUsuario: Login): Observable<Jwt> {
    return this.http.post<Jwt>(this.url + 'login', loginUsuario);
  }


}
