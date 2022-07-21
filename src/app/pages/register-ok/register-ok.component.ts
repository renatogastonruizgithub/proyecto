import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, timeout, timer } from 'rxjs';
@Component({
  selector: 'app-register-ok',
  templateUrl: './register-ok.component.html',
  styleUrls: ['./register-ok.component.scss']
})
export class RegisterOkComponent implements OnInit {
  count: number = 6;
  subscribeTimer: any;
  source:Subscription;
  tiempo:any;
  constructor( private router: Router,) { }

  ngOnInit(): void {    
  this.oberserableTimer();   
  }
  oberserableTimer() {
    const source = timer(0,1000);
    this.tiempo = source.subscribe(val => {
      console.log(val, '-');
      this.subscribeTimer = this.count - val;      
      if(this.subscribeTimer == 0) {      
        this.router.navigate(['/login']); 
      }       
    });
  }

 

ngOnDestroy(){
  this.tiempo.unsubscribe();
}



}
