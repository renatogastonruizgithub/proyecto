import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  map, Observable, pipe } from 'rxjs';
import { CargaLoaderService } from '../carga-loader.service';
import { Persona } from '../modelo/Persona';
import { Habilidadas } from '../modelo/Habiliadades';
import { Trabajos } from '../modelo/Trabajos';
import { Proyectos } from '../modelo/Proyectos';




@Injectable({
  providedIn: 'root'
})
export class SobreMiService {
  url:string='http://localhost:8080/api/';

  constructor(  private http:HttpClient,    public loader:CargaLoaderService  ) { 
  }

  getHome():Observable<any>{
    this.loader.showLoader();
    return this.http.get(this.url+"home").pipe(
      map(r =>{
        this.loader.slowLoader();
        return r
      })
    );   
  }



    getdatos():Observable<any>{
      this.loader.showLoader();
      return this.http.get('http://localhost:3000/trabajos').pipe(
        map(r =>{
          this.loader.slowLoader();
          return r
        })
      );    
    }
  getsobre():Observable<any>{
       this.loader.showLoader();
      return this.http.get(this.url+"sobreMi").pipe(
        map(r =>{
          this.loader.slowLoader();
          return r
        })
      );     
    } 
     getEdu() {
      return this.http.get<Persona>(this.url+'educacion');
    
    } 

    getHabilidades() {
      return this.http.get<Habilidadas[]>(this.url+'getHabilidades');
    
    } 
    getTrabajos() {
      return this.http.get<Trabajos[]>(this.url+'trabajos');
    }

    getProyectos() {
      return this.http.get<Proyectos[]>(this.url+'proyectos');
    }

}
