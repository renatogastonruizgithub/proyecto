import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Persona } from 'src/app/modelo/Persona';
import { ModalServiceService } from 'src/app/services/modal-service.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() titulos=' ';
  @Input() per:any;
  @Input()  mostrar: boolean;  
  @Output() cerrar = new EventEmitter();
  @Output() item = new EventEmitter<Object>();
 
  constructor( private modalServicio:ModalServiceService) { }

  ngOnInit(): void {
  }
  

 /*  editar(personas:Persona){
  this.mostrar=true;
   console.log(personas.id);
   localStorage.setItem("id",personas.id.toString());
  }  
 */
abrirModal(){
  console.log("abir");
  this.mostrar=true;
}

 cerrarModal(){
   console.log("cerrar");
  this.cerrar.emit(this.mostrar=false);
} 
}
