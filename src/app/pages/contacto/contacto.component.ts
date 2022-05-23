import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  titleAside:string[];
  constructor() { this.titleAside=['Contacto.']; }

  ngOnInit(): void {
  }

}
