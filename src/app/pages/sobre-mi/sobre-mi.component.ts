import { HttpHeaderResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Habilidadas } from 'src/app/modelo/Habiliadades';
import {  Persona } from 'src/app/modelo/Persona';
import { Trabajos } from 'src/app/modelo/Trabajos';
import { SobreMiService } from 'src/app/services/sobre-mi.service';

declare function parallaxHero():void;
@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.scss']
})
export class SobreMiComponent implements OnInit {
 titleAside:string[];
  expe:string="</Experiencia laboral>";
  educacion:string="</Educacion>";
  skill:string="</Habilidades>";
  tagPOpen:string="<p>";
  tagPClose:string="</p>";
  sobre:Persona[];
  habilidades:Habilidadas[];
  trabajos:Trabajos[];
  edu:any=[];
  constructor(private SobreMiService:SobreMiService) { this.titleAside=['</Sobre mi>'];}

  ngOnInit(): void {
   
       this.SobreMiService.getsobre().subscribe(g=>{
      this.sobre=g
           console.log(this.sobre)    
       
     })


     this.SobreMiService.getEdu().subscribe((re)=>{
      this.edu=re
       console.log(re);
     })


     this.SobreMiService.getHabilidades().subscribe((res)=>{
      this.habilidades=res;
      
     })

     this.SobreMiService.getTrabajos().subscribe((res)=>{
      this.trabajos=res;
      
     })
  }



}
