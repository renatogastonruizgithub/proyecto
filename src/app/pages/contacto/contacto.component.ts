import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';
import { CargaLoaderService } from 'src/app/carga-loader.service';
import { Email } from 'src/app/modelo/Email';
import { EmailServiceService } from 'src/app/services/email-service.service';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  titleAside:string[];
  formulario:FormGroup;
  cargando:boolean=false;
  constructor(private Servicio:EmailServiceService,
    public loader:CargaLoaderService ,private toastr: ToastrService,private formBuilder:FormBuilder) {
     this.titleAside=['</Contacto>']; 
    
     this.formulario=this.formBuilder.group({     
      name:['',[Validators.required]],
      subject:['',[Validators.required]],
      body:['',[Validators.required]],
      mail:['',[Validators.required,Validators.email] ],    
    });    
    }

  ngOnInit(): void {
  }

  get name(){
    return this.formulario.get('name');
  }
  get subject(){
    return this.formulario.get('subject');
  }
  get body(){
    return this.formulario.get('body');
  }
  get mail(){
    return this.formulario.get('mail');
  }
  public sendEmail() {
    this.formulario.markAllAsTouched();
     
    if(this.formulario.valid){
      this.cargando=true;
      this.Servicio.sendMail(this.formulario.value).subscribe({
        next:(email:Email)=>{          
          this.toastr.success("Enviado con exito")        
          this.cargando=false;       
          this.formulario.reset();
             
        },
        error:(error:HttpErrorResponse)=>{
          this.toastr.warning(error.error.mensaje)
        this.cargando=false;      
        }
      })   


    } 
  }
}
