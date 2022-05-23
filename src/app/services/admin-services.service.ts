import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class AdminServicesService {
 persona:Persona;

  url:string='http://localhost:8080/';

  constructor(  private http:HttpClient) { }
 

  getPersona() {
    return this.http.get<Persona[]>(this.url+'sobreMi');
  }
  gePersonaById(id:number){
    return this.http.get<Persona>(this.url+'persona/'+id);
  }

  createPersona(persona:Persona){
    return this.http.post<Persona[]>(this.url+'guardarPersona',persona);
  }

  eliminarPersona(id:number){
    return this.http.delete<Persona>(this.url+'borrarPersona/'+id);
  }

  editrPersona(persona:Persona){
    return this.http.put<Persona>(this.url+'actualizarPersona/'+persona.id,persona);
  }


}
