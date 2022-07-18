import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

import { LoaderDashboardService } from 'src/app/services/loader-dashboard.service';

@Component({
  selector: 'app-loader-dashboard',
  templateUrl: './loader-dashboard.component.html',
  styleUrls: ['./loader-dashboard.component.scss']
})
export class LoaderDashboardComponent implements OnInit {

  constructor
  ( private _router:Router,
    public loaderDashboard:LoaderDashboardService
    ) 
    {
     this._router.events.subscribe((event) =>{

      if(event instanceof NavigationStart){
        this.loaderDashboard.showLoader();
      }  else if(event instanceof NavigationEnd ||event instanceof NavigationCancel || event instanceof NavigationError ){
        this.loaderDashboard.hideLoader();
        console.log("error loader Dashboard")
      } 
    }) 
   }

  ngOnInit(): void {
    
    
  } 
 ngOnDestroy(): void {
    
  this.loaderDashboard.hideLoader();
  } 
  

}
