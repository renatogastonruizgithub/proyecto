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
  cargando:boolean=false;
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
  
  }

  get usuario(){
    return this.formulario.get('usernameOrEmail');
  }
  get passwords(){
    return this.formulario.get('password');
  }


login(){ 
  this.formulario.markAllAsTouched(); 
  if(this.formulario.valid){
    this.cargando=true;
    this.authService.login(this.formulario.value).subscribe( {
      next:(jwt:Jwt)=>{
        this.cargando=false;           
        this.tokenService.setToken(jwt.tokenDeAcceso);       
        this.toastr.success("Inicio de sesion con exito ")
        this.router.navigate(['/admin']); 
      },
      error:(error:HttpErrorResponse)=>{       
        this.toastr.warning("Usuario o contraseña no coinciden")
        this.cargando=false; 
      }
    })
  }
 
  

}

}
