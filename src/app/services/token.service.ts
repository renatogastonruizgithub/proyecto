import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const TOKEN = 'AuthToken';


@Injectable({
  providedIn: 'root'
})
export class TokenService {
 
  roles: Array<string> = [];
  constructor( private router: Router) { }
//guardo las constantes en la sessionStorage del navegador

//metodo para guardar el token   
public setToken(token: string): void {
  window.sessionStorage.removeItem(TOKEN);
  window.sessionStorage.setItem(TOKEN, token);
}
//metodo para obetener el token 
public getToken(){
  return sessionStorage.getItem(TOKEN);
}

public isLogged(): boolean {
  if (this.getToken()) {
    return true;
  }
  return false;
}

public getUserName(): string {
  if (!this.isLogged()) {
    return null!;
  }
  const token = this.getToken();
  const payload = token!.split('.')[1];
  const payloadDecoded = atob(payload);
  const values = JSON.parse(payloadDecoded);
  const username = values.sub;
  return username;
}

public isAdmin(): boolean {
  if (!this.isLogged()) {
    return false;
  }
  const token = this.getToken();
  const payload = token!.split('.')[1];
  const payloadDecoded = atob(payload);
  const values = JSON.parse(payloadDecoded);
  const roles = values.roles;
  if (roles.indexOf('ROLE_ADMIN') < 0) {
    return false;
  }
  return true;
}

public logOut(): void {
  window.sessionStorage.clear();
  this.router.navigate(['/login']);
}










}//fin

