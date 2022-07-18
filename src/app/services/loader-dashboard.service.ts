import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderDashboardService {

  constructor() { }
  public SpinnerVisible=true;

  showLoader(){
    this.SpinnerVisible=true;
  }
    hideLoader(){
    this.SpinnerVisible=false;
  }
   slowLoader(t:number=1000){
    setTimeout(()=>{
      this.hideLoader()
    },t)
}
}
