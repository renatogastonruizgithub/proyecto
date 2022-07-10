import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
  constructor(private toastr: ToastrService,private SobreMiService:SobreMiService) {
  
   }

  ngOnInit(): void {
    this.SobreMiService.getHome().subscribe({
      next:(response:Persona[] )=>{
        this.home=response;
        console.log(response)
      },
      error:(error:HttpErrorResponse)=>{
        this.toastr.warning( error.message);
      }
    })
  }
  
}
