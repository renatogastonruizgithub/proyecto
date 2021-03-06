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
  url:string='https://young-springs-43997.herokuapp.com/api/';

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
 /*  getHome():Observable<any>{  
   return this.http.get(this.url+"home");
  } */

    getdatos():Observable<any>{
      this.loader.showLoader();
      return this.http.get('http://localhost:3000/trabajos').pipe(
        map(r =>{
          this.loader.showLoader();
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
      
      return this.http.get<Trabajos[]>(this.url+'trabajos')
    }

    getProyectos():Observable<any> {
      this.loader.showLoader();
      return this.http.get<Proyectos[]>(this.url+'proyectos').pipe(
        map(r =>{
          this.loader.slowLoader();
          return r
        })
        );  
    }

}
