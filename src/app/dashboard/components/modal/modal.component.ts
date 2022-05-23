import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Persona } from 'src/app/modelo/Persona';

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
 
  constructor() { }

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
