import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Persona } from 'src/app/modelo/Persona';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { AdminServicesService } from 'src/app/services/admin-services.service';
@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent implements OnInit {
  @Input() titulo=' ';
  @Input()  mostrar: boolean;  
  @Output() cerrar = new EventEmitter();
  
  @Input() Ediformulario:FormGroup;
  constructor(private formBuilder:FormBuilder, private servicio:AdminServicesService  ) { 

  

   /* this.Ediformulario=this.formBuilder.group({
    id:[''],
    nombre:['',[Validators.required,Validators.maxLength(35)]],
    apellido:['',[Validators.required,Validators.maxLength(35)]],
    nacimiento:['',[Validators.required,]],
    ocupacion:['',[Validators.required,Validators.maxLength(35)]],
    stack:['',[Validators.required,Validators.maxLength(35)]],
    nacionalidad:['',[Validators.required,Validators.maxLength(35)]],
    provincia:['',[Validators.required,Validators.maxLength(35)]],
    domicilio:['',[Validators.required,Validators.maxLength(35)]],
    descripion:['',[Validators.required,Validators.maxLength(535)]],
    imgBanner:['',[Validators.required,Validators.maxLength(235)]],
    imgAbout:['',[Validators.required,Validators.maxLength(235)]],
    nro:['',[Validators.required,Validators.maxLength(35)]],
    tituloAbout:['',[Validators.required,Validators.maxLength(35)]] 
  }) 
 */

 }

  ngOnInit(): void {

  }

  openEdit(personas:Persona){
            this.mostrar=true;
  
   this.Ediformulario.setValue({
    id:personas.id,
    nombre:personas.nombre,
     apellido:personas.apellido,
    nacimiento:personas.nacimiento, 
    ocupacion:personas.ocupacion, 
    stack:personas.stack, 
    nacionalidad:personas.nacionalidad, 
    provincia:personas.provincia, 
    domicilio:personas.domicilio, 
    descripion:personas.descripion, 
    imgBanner:personas.imgBanner, 
  imgAbout:personas.imgAbout, 
    nro:personas.nro, 
    tituloAbout:personas.tituloAbout  
      }) 
     console.log(this.Ediformulario.value);   
   }
  
   closeEdit(){
     console.log("cerrar");
    this.cerrar.emit(this.mostrar=false);
  } 
}
