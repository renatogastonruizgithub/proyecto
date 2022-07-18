import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
public show=false;
  constructor() { }
  

  openSider(){
    this.show=!this.show;
  }
  closeSider(){
    this.show=false;
  }
  ngOnInit(): void {
  }

}
