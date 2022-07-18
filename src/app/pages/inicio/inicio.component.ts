import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CargaLoaderService } from 'src/app/carga-loader.service';
import { Persona } from 'src/app/modelo/Persona';
import { SobreMiService } from 'src/app/services/sobre-mi.service';
declare function parallaxHero():void;
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

    home:Persona[];
  constructor(private loader:CargaLoaderService,private toastr: ToastrService,private SobreMiService:SobreMiService) {
  
   }

  ngOnInit(): void {
    this.loader.showLoader();
    this.SobreMiService.getHome().subscribe({
      next:(response:Persona[] )=>{  
        this.home=response;     
        this.loader.hideLoader();
      },
      error:(error:HttpErrorResponse)=>{
        this.toastr.warning( error.message);
      }
    })
  }
  
}
