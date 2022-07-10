import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { startWith } from 'rxjs';
import { Login } from 'src/app/modelo/login';
import { Jwt } from 'src/app/modelo/token';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formulario:FormGroup;
  isLogged = false;
  isLoginFail = false;
  loginUsuario: Login;
  nombreUsuario: string;
  password: string;
  roles: string[] = [];
  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private formBuilder:FormBuilder
  ) { 

    this.formulario=this.formBuilder.group({     
      password:['',[Validators.required]],
      usernameOrEmail:['',[Validators.required]],
    });


  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

login(){
  
  this.authService.login(this.formulario.value).subscribe( {
    next:(jwt:Jwt)=>{
      console.log(this.formulario.value)
      this.isLogged = true;
      this.tokenService.setToken(jwt.tokenDeAcceso);
      this.tokenService.setUserName(jwt.username);
      this.tokenService.setAuthorities(jwt.authorities);
      this.roles=jwt.authorities; 
      this.toastr.success("Inicio de secion con exito "+jwt.username)
      this.router.navigate(['/admin']); 
    },
    error:(error:HttpErrorResponse)=>{
      this.isLogged = false;
      this.toastr.warning(error.message)
    }
  })
  

}

}
