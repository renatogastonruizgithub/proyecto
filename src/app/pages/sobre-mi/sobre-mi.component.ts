import { Component, OnInit } from '@angular/core';
import { SobreMiService } from 'src/app/services/sobre-mi.service';
@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.scss']
})
export class SobreMiComponent implements OnInit {
 titleAside:string[];
  
  sobre: Array<any>=[];
  constructor(private SobreMiService:SobreMiService) { this.titleAside=['Sobre mi.'];}

  ngOnInit(): void {
       this.SobreMiService.getsobre().subscribe( resp =>{
       this.sobre=resp; 
      console.log(resp);
       
     })

  }
}
