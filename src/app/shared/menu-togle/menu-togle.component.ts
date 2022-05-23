import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-togle',
  templateUrl: './menu-togle.component.html',
  styleUrls: ['./menu-togle.component.scss']
})
export class MenuTogleComponent implements OnInit {
 
  constructor( ) { }
   
 public show=false;

 openModal(){
   this.show=true;
 }
 closeModal(){
   this.show=false;
 }
  ngOnInit(): void {
 
  }

}
