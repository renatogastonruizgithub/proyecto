import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Email } from '../modelo/Email';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {
  url:string='https://young-springs-43997.herokuapp.com/send';
  constructor(private http:HttpClient) { }

  public sendMail(email: Email): Observable<Email> {
    return this.http.post<Email>(this.url, email);
    
  }


}
