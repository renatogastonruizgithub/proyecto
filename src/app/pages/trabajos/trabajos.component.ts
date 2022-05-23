import { Component, OnInit } from '@angular/core';
import { SobreMiService } from 'src/app/services/sobre-mi.service';
import { CargaLoaderService } from 'src/app/carga-loader.service';
@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.scss']
})
export class TrabajosComponent implements OnInit {
  titleAside:string[];
trabajo:Array<any>=[];

  constructor(private SobreMiService:SobreMiService

    ) { 

    this.titleAside=['Trabajos.'];
    
  }

  ngOnInit(): void {
      
       this.SobreMiService.getdatos().subscribe( resp =>{
       this.trabajo=resp; 
     /*  console.log(resp); */
     
     })

  }

}
