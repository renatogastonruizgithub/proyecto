import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private authServicio:AuthService
    ) {


    this.formularioR=this.formBuilder.group({     
      nombre:['',[Validators.required]],
      username:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required]],
      roles:['',[Validators.required]], 
    });

   }

  ngOnInit(): void {
  }
  registro(){    
    console.log(this.formularioR.value)
   this.authServicio.nuevoUsuario(this.formularioR.value).subscribe({
    next:(nuevoUsuario:NuevoUsuario)=>{
      this.toastr.success("cuenta creada con exito")
 
       setTimeout(()=>{
        this.router.navigate(['/login']);
      },1000)  
    },
    error:(error:HttpErrorResponse)=>{
      this.toastr.warning(error.error.mensaje)
      console.log(error.error)
    
    }
  })
  
  
  }
}
