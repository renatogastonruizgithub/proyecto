import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Trabajos } from 'src/app/modelo/Trabajos';
import { AdminServicesService } from 'src/app/services/admin-services.service';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.scss']
})
export class TrabajosComponent implements OnInit {
  trabajos:Trabajos[];
  mostrar:boolean=false;
  formulario:FormGroup;
  visibleBtn:boolean=false;
  constructor(private toastr: ToastrService,private servicio:AdminServicesService ,private formBuilder:FormBuilder) 
  {
    this.formulario=this.formBuilder.group({
      id:[''],
      nombre:['',[Validators.required]],
      cargo:['',[Validators.required]],
      descripcion:['',[Validators.required]],
      inicio:['',[Validators.required]],
      fin:['',[Validators.required]],
    });
   }

  ngOnInit(): void {
    this.refrescar();
  }

  refrescar():void {
    this.servicio.getTrabajos().subscribe({
      next:(response:Trabajos[] )=>{
        this.trabajos=response;
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
      if(this.formulario.valid) {
        this.servicio.crearTrabajos(this.formulario.value).subscribe({
  
          next:(response:Trabajos )=>{ 
            this.formulario.reset();
            this.refrescar();
            this.cerrarModal();
            this.toastr.success("se creo con exito");   
          },
          error:(error:HttpErrorResponse)=>{
            this.toastr.warning(error.message); 
          }            
        })
            
      } 
      else{
        alert("campos vacios");
      }
    }

    openEditar(item:any){
      this.openModal();
      this.visibleBtn=true;
      this.formulario.controls['id'].setValue(item.id); 
      this.formulario.controls['descripcion'].setValue(item.descripcion);
      this.formulario.controls['nombre'].setValue(item.nombre);
      this.formulario.controls['cargo'].setValue(item.cargo);
      this.formulario.controls['inicio'].setValue(item.inicio);
      this.formulario.controls['fin'].setValue(item.fin);
    }

    actualizar(){
      this.servicio.editarTtrabajos(this.formulario.value).subscribe({
        next:(response:Trabajos)=>{
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



    eliminar(item:any){
      if(confirm("¿Desea eliminar el registro?")){
        this.servicio.eliminarTrabajos(item.id).subscribe({
          next:(response:Trabajos)=>{ 
            this.refrescar(); 
            this.toastr.success('se elimino con exito');         
          },
          error:(error:HttpErrorResponse)=>{
           
            this.toastr.warning(error.message);
          }
        })
      }
    }












}//fin 
