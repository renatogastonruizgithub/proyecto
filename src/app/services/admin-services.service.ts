import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../modelo/Educacion';
import { Habilidadas } from '../modelo/Habiliadades';
import { Persona } from '../modelo/Persona';
import { Proyectos } from '../modelo/Proyectos';
import { Trabajos } from '../modelo/Trabajos';

@Injectable({
  providedIn: 'root'
})
export class AdminServicesService {
 persona:Persona;

  url:string='https://young-springs-43997.herokuapp.com/api/';

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




  getEducacion() {
    return this.http.get<Educacion[]>(this.url+'educacion');
  }
  crearEducacion(educacion:Educacion):Observable<Educacion>
  {
    return this.http.post<Educacion>(this.url+'educacion/educacion',educacion);
  }

  actualizarEducacion(educacion:Educacion):Observable<Educacion>
  {
    return this.http.put<Educacion>(this.url+'educacion/actualizarEducacion/'+educacion.id,educacion);
  }

  eliminarEducacion(id:number):Observable<Educacion>
  {
    return this.http.delete<Educacion>(this.url+'educacion/'+id);
  }


  getTrabajos() {
    return this.http.get<Trabajos[]>(this.url+'trabajos');
  }
  crearTrabajos(trabajo:Trabajos):Observable<Trabajos>
  {
    return this.http.post<Trabajos>(this.url+'trabajos',trabajo);
  }

  editarTtrabajos(trabajo:Trabajos):Observable<Trabajos>
  {
    return this.http.put<Trabajos>(this.url+'actualizarTrabajos/'+trabajo.id,trabajo);
  }
  eliminarTrabajos(id:number):Observable<Trabajos>
  {
    return this.http.delete<Trabajos>(this.url+'trabajos/'+id);
  }


  getHabilidades() {
    return this.http.get<Habilidadas[]>(this.url+'getHabilidades');
  }

  crearHabi(h:Habilidadas):Observable<Habilidadas>
  {
    return this.http.post<Habilidadas>(this.url+'habilidades',h);
  }

  editarHabi(h:Habilidadas):Observable<Habilidadas>
  {
    return this.http.put<Habilidadas>(this.url+'actualizarHabilidades/'+h.id,h);
  }
  eliminarHabi(id:number):Observable<Habilidadas>
  {
    return this.http.delete<Habilidadas>(this.url+'eliminarHabilidad/'+id);
  }

  getProyectos() {
    return this.http.get<Proyectos[]>(this.url+'proyectos');
  }
  crearProyec(p:Proyectos):Observable<Proyectos>
  {
    return this.http.post<Proyectos>(this.url+'proyectos',p);
  }

  editarProyec(h:Proyectos):Observable<Proyectos>
  {
    return this.http.put<Proyectos>(this.url+'actualizarProyectos/'+h.id,h);
  }
  eliminarProyec(id:number):Observable<Proyectos>
  {
    return this.http.delete<Proyectos>(this.url+'proyectos/'+id);
  }


}//fin
