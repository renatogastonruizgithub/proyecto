import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CargaLoaderService } from 'src/app/carga-loader.service';
import { NuevoUsuario } from 'src/app/modelo/NuevoUser';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss']
})
export class RegistrarseComponent implements OnInit {
  formularioR:FormGroup;
  rol: Array<string> = ['admin', 'user'];
  new:NuevoUsuario[];
  constructor( private router: Router,
    private toastr: ToastrService,
    private formBuilder:FormBuilder,
    private authServicio:AuthService,
    public loader:CargaLoaderService
    ) {


    this.formularioR=this.formBuilder.group({     
      nombre:['',[Validators.required]],
      username:['',[Validators.required]],
      email:['',[Validators.required,Validators.email] ],
      password:['',[Validators.required]],
      roles:['',[Validators.required]], 
    });

   }

  ngOnInit(): void {
  }

  get nombre(){
    return this.formularioR.get('nombre');
  }
  get user(){
    return this.formularioR.get('username');
  }

  get email(){
    return this.formularioR.get('email');
  }
  get pass(){
    return this.formularioR.get('password');
  }

  get roles(){
    return this.formularioR.get('roles');
  }


  registro(){  
    this.formularioR.markAllAsTouched(); 
    if(this.formularioR.valid){
     
      this.authServicio.nuevoUsuario(this.formularioR.value).subscribe({
        next:(nuevoUsuario:NuevoUsuario)=>{          
          this.toastr.success("cuenta creada con exito")       
          this.formularioR.reset();
                
           setTimeout(()=>{
            this.router.navigate(['/registroOk']);
          },1000) 
             
        },
        error:(error:HttpErrorResponse)=>{
          this.toastr.warning(error.error.mensaje)
          console.log(error.error)        
        }
      })      
    }   
  }
}
