import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  foto: string;
  constructor() { 
    this.foto = '../../../assets/icons/css.png';
  }

  ngOnInit(): void {
  }

}
