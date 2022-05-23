import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { CargaLoaderService } from 'src/app/carga-loader.service';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  

  constructor
  ( private _router:Router,
    public loader:CargaLoaderService
    ) 
    {
     this._router.events.subscribe((event) =>{

      if(event instanceof NavigationStart){
        this.loader.showLoader();
      }  else if(event instanceof NavigationEnd ||event instanceof NavigationCancel || event instanceof NavigationError ){
        this.loader.hideLoader();
        console.log("error")
      } 
    }) 
   }

  ngOnInit(): void {
    
    
  } 
 ngOnDestroy(): void {
    
  this.loader.hideLoader();
  } 
  

}
