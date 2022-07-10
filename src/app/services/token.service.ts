import { Injectable } from '@angular/core';

const TOKEN = 'AuthToken';
const USERNAME = 'AuthUserName';
const AUTHORITIES = 'AuthAuthorities';


@Injectable({
  providedIn: 'root'
})
export class TokenService {
 
  roles: Array<string> = [];
  constructor() { }
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

public setUserName(userName: string): void {
  window.sessionStorage.removeItem(USERNAME);
  window.sessionStorage.setItem(USERNAME, userName);
}
public getUserName() {
  return sessionStorage.getItem(USERNAME);
}

public setAuthorities(authorities: string[]): void {
  window.sessionStorage.removeItem(AUTHORITIES);
  window.sessionStorage.setItem(AUTHORITIES, JSON.stringify(authorities));
}

public getAuthorities(): string[] {
  this.roles = [] ;
  if (sessionStorage.getItem(AUTHORITIES)) {
    //por si llega vacio 
    JSON.parse(sessionStorage.getItem(AUTHORITIES) || "[]").forEach((authority: { authority: string; })  => {
      
      this.roles.push(authority.authority);
    });
  }
  return this.roles;
}

public logOut(): void {
  window.sessionStorage.clear();
}









}//fin

function forEach(arg0: (authority: any) => void) {
  throw new Error('Function not implemented.');
}

