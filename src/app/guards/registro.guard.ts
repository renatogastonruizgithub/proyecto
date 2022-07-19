import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class RegistroGuard implements CanActivate {
  constructor(private router: Router,private chek:AuthService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     let registrado =window.localStorage.getItem("key")
     if(registrado){
      this.router.navigate(["/registroOk"])
      return true;
    }
    else{
      this.router.navigate(["/registro"])
return false
    }
    
  }
  
}
