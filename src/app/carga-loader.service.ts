import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargaLoaderService {

  public isSpinnerVisible=true;

  showLoader(){
    this.isSpinnerVisible=true;
  }
    hideLoader(){
    this.isSpinnerVisible=false;
  }
  slowLoader(t:number=1000){
    setTimeout(()=>{
      this.hideLoader()
    },t)
  }
   
}
