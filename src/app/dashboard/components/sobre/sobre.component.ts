import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


import { Persona } from 'src/app/modelo/Persona';
import { AdminServicesService } from 'src/app/services/admin-services.service';
import { ModalComponent } from 'src/app/dashboard/components/modal/modal.component';
import { Subscription } from 'rxjs';
import { HttpErrorResponse, HttpHeaderResponse } from '@angular/common/http';
import { TokenService } from 'src/app/services/token.service';
import { LoaderDashboardService } from 'src/app/services/loader-dashboard.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {
  formulario:FormGroup; 
  personas:Persona[];
  validar= false;
  id: number; 
  realRol: string;
  mostrar:boolean=false;
  visibleBtn:boolean=false;
  /* @Output() editarOpen = new EventEmitter();  */
 

  constructor(private toastr: ToastrService,private load:LoaderDashboardService ,private tokenService:TokenService, private router:Router,private formBuilder:FormBuilder, private servicio:AdminServicesService) { 

     this.formulario=this.formBuilder.group({
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


  } //validar solo letras

  ngOnInit(): void {
 this.actualizar();
    this.hasRole();
  }
  
  hasRole():void{
    let roles = this.tokenService.isAdmin();
       this.realRol = 'user';
       if (roles) {
        this.realRol = 'admin';
      }
      }

  actualizar(){
    this.load.showLoader();
    this.servicio.getPersona().subscribe(data=>{
      this.personas=data;
      this.load.hideLoader();
      console.log(data); 
      })      
  }
 
  openEdit(personas:Persona){
    this.openModal();
    this.visibleBtn=true;
   this.formulario.setValue({
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
 } 

 cerrarModal(){
  this.mostrar=false;  
  }

  openModal(){
    this.mostrar=true;
    this.visibleBtn=false;
    this.formulario.reset();
  }
  guardar(){
    this.formulario.markAllAsTouched();
    if(this.formulario.valid) {
      this.servicio.createPersona(this.formulario.value).subscribe(data=>
        {
          this.personas.push.apply(data);            
          this.formulario.reset();
          this.actualizar();        
          this.toastr.success("se creo con exito"); 
          this.mostrar=false; 
      })
          
    } else{
      this.toastr.warning("campos vacios"); 

    }
  }
  
  eliminar(personas:Persona){
    if(confirm("¿Desea eliminar el registro?")){
    this.servicio.eliminarPersona(personas.id).subscribe(res=>{
        this.personas=this.personas.filter(p=>p!==personas);
        this.toastr.success("eliminado exito");
           
      })      
    }
  
  }

 editar(){
  this.formulario.markAllAsTouched();
  if(this.formulario.valid){
    this.servicio.editrPersona(this.formulario.value).subscribe({    
      next:(response:Persona)=>{
        console.log(this.personas)
        this.toastr.success("se actuzlizo");
          this.actualizar();
          this.mostrar=false;          
         },
         error:(error:HttpErrorResponse)=>{
          this.toastr.warning(error.message);
         }     
       })
  }  
  
} 

//para validar
  get nombre(){
    return this.formulario.get('nombre');
  }
  get apellido(){
    return this.formulario.get('apellido');
  }
  get nacimiento(){
    return this.formulario.get('nacimiento');
  }
  get ocupacion(){
    return this.formulario.get('ocupacion');
  } 
  get stack(){
    return this.formulario.get('stack');
  } 
  get nacionalidad(){
    return this.formulario.get('nacionalidad');
  } 
  get provincia(){
    return this.formulario.get('provincia');
  } 
  get domicilio(){
    return this.formulario.get('domicilio');
  } 
  get descripion(){
    return this.formulario.get('descripion');
  } 
  get imgBanner(){
    return this.formulario.get('imgBanner');
  } 
  get imgAbout(){
    return this.formulario.get('imgAbout');
  } 
  get tituloAbout(){
    return this.formulario.get('tituloAbout');
  } 
  get nro(){
    return this.formulario.get('nro');
  } 


}
