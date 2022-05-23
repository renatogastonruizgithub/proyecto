import { Component, OnInit,Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card-works',
  templateUrl: './card-works.component.html',
  styleUrls: ['./card-works.component.scss']
})
export class CardWorksComponent implements OnInit {

@Input() item:any;


  constructor() { }

  ngOnInit(): void {
 
   
     }
  }

