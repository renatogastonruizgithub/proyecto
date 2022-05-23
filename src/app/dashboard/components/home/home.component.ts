import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelo/Persona';
import { AdminServicesService } from 'src/app/services/admin-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  modal=false;
  personas:Persona[];
  constructor(private servicio:AdminServicesService) { }

  ngOnInit(): void {
    this.servicio.getPersona().subscribe(data=>{
    this.personas=data;
    console.log(data);
  })
  
    }
  abrirModal(){
    this.modal=true;
  }
  cerrarModal(e: any){
    this.modal=e;
  }
}
