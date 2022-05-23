import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  map, Observable, pipe } from 'rxjs';
import { CargaLoaderService } from '../carga-loader.service';



@Injectable({
  providedIn: 'root'
})
export class SobreMiService {

  constructor(  private http:HttpClient,    public loader:CargaLoaderService  ) { 
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
      return this.http.get('http://localhost:3000/sobre').pipe(
        map(r =>{
          this.loader.slowLoader();
          return r
        })
      );
     
    }

}
