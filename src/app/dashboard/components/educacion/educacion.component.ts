import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/modelo/Educacion';
import { AdminServicesService } from 'src/app/services/admin-services.service';
import { ToastrService } from 'ngx-toastr';
import { ModalServiceService } from 'src/app/services/modal-service.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent implements OnInit {
  educaciones:Educacion[];
  mostrar:boolean=false;
  formulario:FormGroup;
  visibleBtn:boolean=false;
  constructor(private modalServicio:ModalServiceService,private toastr: ToastrService,private servicio:AdminServicesService ,private formBuilder:FormBuilder ) 
  {
    this.formulario=this.formBuilder.group({
      id:[''],
      titulo:['',[Validators.required]],
      info:['',[Validators.required]],
      instituto:['',[Validators.required]],
      inicio:['',[Validators.required]],
      fin:['',[Validators.required]],
    });
  
  


   }//fin contruc

  ngOnInit(): void {
    this.refrescar();
  }

  refrescar():void {
    this.servicio.getEducacion().subscribe({
      next:(response:Educacion[] )=>{
        this.educaciones=response;
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
      this.servicio.crearEducacion(this.formulario.value).subscribe({

        next:(response:Educacion )=>{ 
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
    this.formulario.controls['titulo'].setValue(item.titulo);
    this.formulario.controls['info'].setValue(item.info);
    this.formulario.controls['instituto'].setValue(item.instituto);
    this.formulario.controls['inicio'].setValue(item.inicio);
    this.formulario.controls['fin'].setValue(item.fin);
  }

  actualizar(){
    this.servicio.actualizarEducacion(this.formulario.value).subscribe({
      next:(response:Educacion)=>{
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
      this.servicio.eliminarEducacion(item.id).subscribe({
        next:(response:Educacion)=>{ 
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
