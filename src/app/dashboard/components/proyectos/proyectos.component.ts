import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Proyectos } from 'src/app/modelo/Proyectos';
import { AdminServicesService } from 'src/app/services/admin-services.service';
import { LoaderDashboardService } from 'src/app/services/loader-dashboard.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  proyectos:Proyectos[];
  mostrar:boolean=false;
  formulario:FormGroup;
  visibleBtn:boolean=false;
  realRol: string;
  constructor(private load:LoaderDashboardService,
    private tokenService:TokenService,private toastr: ToastrService,private servicio:AdminServicesService ,private formBuilder:FormBuilder) 
  {
    this.formulario=this.formBuilder.group({
      id:[''],
      nombre:['',[Validators.required]],
      imagen:['',[Validators.required]],
      descripcion:['',[Validators.required]],
    
    });
   }

  ngOnInit(): void {
    this.refrescar();
    this. hasRole();
  }
  hasRole():void{
    let roles = this.tokenService.isAdmin();
       this.realRol = 'user';
       if (roles) {
        this.realRol = 'admin';
      }
      }
  refrescar():void {
    this.load.showLoader();
    this.servicio.getProyectos().subscribe({
      next:(response:Proyectos[] )=>{
        this.proyectos=response;
        this.load.hideLoader();

        console.log(response)
      },
      error:(error:HttpErrorResponse)=>{
        this.toastr.warning( error.message);
      }
    })
  }//fin refrescar

  cerrarModal(){
    this.mostrar=false;  
    }
  
    openModal(){
      this.mostrar=true;
      this.visibleBtn=false;
      this.formulario.reset();
    }
  
  
    guardar()
    { 
      this.formulario.markAllAsTouched();
      if(this.formulario.valid) {
        this.servicio.crearProyec(this.formulario.value).subscribe({
  
          next:(response:Proyectos )=>{ 
            this.formulario.reset();
            this.refrescar();
            this.cerrarModal();
            this.toastr.success("se creo con exito");   
          },
          error:(error:HttpErrorResponse)=>{
            this.toastr.warning(error.error.mensaje); 
          }            
        })
            
      } 
      else{
        this.toastr.warning("campos vacios"); 
      }
    }

    openEditar(item:any){
      this.openModal();
      this.visibleBtn=true;
      this.formulario.controls['id'].setValue(item.id); 
      this.formulario.controls['descripcion'].setValue(item.descripcion);
      this.formulario.controls['nombre'].setValue(item.nombre);
      this.formulario.controls['imagen'].setValue(item.imagen);
   
    }

    actualizar(){
      if(this.formulario.valid){
        this.servicio.editarProyec(this.formulario.value).subscribe({
          next:(response:Proyectos)=>{
            this.refrescar(); 
            this.formulario.reset();
            this.cerrarModal();  
            this.toastr.success("se actualizo con exito");
            
          },
          error:(error:HttpErrorResponse)=>{        
            this.toastr.warning(error.message);
          }
        })
      }
     
    }



    eliminar(item:any){
      if(confirm("??Desea eliminar el registro?")){
        this.servicio.eliminarProyec(item.id).subscribe({
          next:(response:Proyectos)=>{ 
            this.refrescar(); 
            this.toastr.success('se elimino con exito');         
          },
          error:(error:HttpErrorResponse)=>{
           
            this.toastr.warning(error.message);
          }
        })
      }
    }

    get  nombre(){
      return this.formulario.get('nombre');
    }
    get  imagen(){
      return this.formulario.get('imagen');
    }
    get  descripcion(){
      return this.formulario.get('descripcion');
    }
  



}
