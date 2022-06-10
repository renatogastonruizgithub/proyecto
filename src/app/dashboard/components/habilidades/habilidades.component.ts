import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Habilidadas } from 'src/app/modelo/Habiliadades';
import { AdminServicesService } from 'src/app/services/admin-services.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent implements OnInit {
  habilidades:Habilidadas[];
  mostrar:boolean=false;
  formulario:FormGroup;
  visibleBtn:boolean=false;
  constructor(private toastr: ToastrService,private servicio:AdminServicesService ,private formBuilder:FormBuilder ) 
   {
    this.formulario=this.formBuilder.group({
      id:[''],
      nombre:['',[Validators.required]],
      numero:['',[Validators.required]],
      icono:['',[Validators.required]],     
    });
    }

    ngOnInit(): void {
      this.refrescar();
    }
  
    refrescar():void {
      this.servicio.getHabilidades().subscribe({
        next:(response:Habilidadas[] )=>{
          this.habilidades=response;
          console.log(response)
        },
        error:(error:HttpErrorResponse)=>{
         alert( error.message);
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
        this.servicio.crearHabi(this.formulario.value).subscribe({
  
          next:(response:Habilidadas )=>{ 
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
      this.formulario.controls['nombre'].setValue(item.nombre);
      this.formulario.controls['numero'].setValue(item.numero);
      this.formulario.controls['icono'].setValue(item.icono);
    }
  
    actualizar(){
      this.servicio.editarHabi(this.formulario.value).subscribe({
        next:(response:Habilidadas)=>{
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
        this.servicio.eliminarHabi(item.id).subscribe({
          next:(response:Habilidadas)=>{ 
            this.refrescar(); 
            this.toastr.success('se elimino con exito');         
          },
          error:(error:HttpErrorResponse)=>{
           
            this.toastr.warning(error.message);
          }
        })
      }
    }
  
  
  
  
  

}
