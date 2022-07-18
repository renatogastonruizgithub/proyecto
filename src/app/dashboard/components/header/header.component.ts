import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogged = false;

  user:string="";
  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.user=this.tokenService.getUserName()!;

    } else {
      this.isLogged = false;
    }
  }
 onLogOut() {
    this.tokenService.logOut();
    window.location.reload();
  }
  

}
