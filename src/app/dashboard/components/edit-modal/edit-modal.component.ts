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

  

   this.Ediformulario=this.formBuilder.group({
     id:[''],
  nombre:['',[Validators.required,Validators.maxLength(35)]],
  apellido:['',[Validators.required,Validators.maxLength(35)]]
  }) 


 }

  ngOnInit(): void {

  }

  openEdit(personas:Persona){
    this.mostrar=true;
    
   this.Ediformulario.setValue({
      id:personas.id,
      nombre:personas.nombre,
      apellido:personas.apellido,
      }) 
     console.log(this.Ediformulario.value);  
   }
  
   closeEdit(){
     console.log("cerrar");
    this.cerrar.emit(this.mostrar=false);
  } 
}
