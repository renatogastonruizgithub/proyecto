import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


import { Persona } from 'src/app/modelo/Persona';
import { AdminServicesService } from 'src/app/services/admin-services.service';
import { ModalComponent } from 'src/app/dashboard/components/modal/modal.component';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {
  formulario:FormGroup;
  Ediformulario:FormGroup;
  modal=false;
  edit=false;
  personas:Persona[];
  validar= false;
  id: number;
  @Output() item = new EventEmitter();
  
  /* @Output() editarOpen = new EventEmitter();  */
 

  constructor( private router:Router,private formBuilder:FormBuilder, private servicio:AdminServicesService) { 

     this.formulario=this.formBuilder.group({
       id:[''],
    nombre:['',[Validators.required,Validators.maxLength(35)]],
    apellido:['',[Validators.required,Validators.maxLength(35)]]
    }) 

    this.Ediformulario=this.formBuilder.group({
      id:[''],
   nombre:['',[Validators.required,Validators.maxLength(35)]],
   apellido:['',[Validators.required,Validators.maxLength(35)]]
   })  


  } //validar solo letras

  ngOnInit(): void {
 this.actualizar();
    
  }
  
  actualizar(){
    this.servicio.getPersona().subscribe(data=>{
      this.personas=data;
      console.log(data);
    /*   if(Persona?.length === null ){
        this.validar=true;
       console.log(this.validar);
      } */
      })
      
  }
 
  openEdit(personas:Persona){
  this.edit=true;
   this.Ediformulario.setValue({
    id:personas.id,
    nombre:personas.nombre,
    apellido:personas.apellido,
    })
 } 

  abrirModal(){    
    this.modal=true;  
  } 
  closeEdit(e: any){
    this.edit=e;
  }
  cerrarModal(e: any){
    this.modal=e;   
  }

  guardar(){
    if(this.formulario.valid) {
      this.servicio.createPersona(this.formulario.value).subscribe(data=>
        {
          this.personas.push.apply(data);            
          this.formulario.reset();
          this.actualizar();
          this.modal.valueOf; 
          alert("se creo con exito");     
      })
          
    } else{
      alert("campos vacios"); 

    }
  }
  
  eliminar(personas:Persona){
    if(confirm("¿Desea eliminar el registro?")){
    this.servicio.eliminarPersona(personas.id).subscribe(res=>{
        this.personas=this.personas.filter(p=>p!==personas);
        alert("registro eliminado");
        this.actualizar();
      
      })
      
    }
  
  }

 editar(){
   this.servicio.editrPersona(this.Ediformulario.value).subscribe(()=>{
     alert("se actuzlizo");
     this.actualizar();   
    
   })
  
} 

//para validar
  get nombre(){
    return this.formulario.get('nombre');
  }
  get apellido(){
    return this.formulario.get('apellido');
  } 
}
