import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import {  ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class GuardsDashboardGuard implements CanActivate {

  constructor(private tokenService: TokenService, private toastr:ToastrService,
    private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let user = this.tokenService.isLogged();
    if (user) {
      return true;
    }
    else{
      this.toastr.warning("necesitar permisos para acceder")
      this.router.navigate(["/login"]);

      return false;
    }

  }






  //añadir en routes en dashboar componente cantactivae
}
