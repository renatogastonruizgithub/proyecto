import { Component, OnInit } from '@angular/core';

import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-inicio-admin',
  templateUrl: './inicio-admin.component.html',
  styleUrls: ['./inicio-admin.component.scss']
})
export class InicioAdminComponent implements OnInit {
  isLogged: boolean;
  userName: string;
  realRol: string;
  
  constructor( private tokenService: TokenService) { }
  

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.userName=this.tokenService.getUserName()!;
      
    } else {
      this.isLogged = false;
    }

   this.hasRole();
  }


  hasRole():void{
let roles = this.tokenService.isAdmin();
   this.realRol = 'user';
   if (roles) {
    this.realRol = 'admin';
  }
  }
}

