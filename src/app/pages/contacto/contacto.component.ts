import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  titleAside:string[];
  formulario:FormGroup;
  constructor(private toastr: ToastrService,private formBuilder:FormBuilder) {
     this.titleAside=['Contacto.']; 
    
     this.formulario=this.formBuilder.group({     
      nombre:['',[Validators.required]],
      apellido:['',[Validators.required]],
      mensaje:['',[Validators.required]],
      email:['',[Validators.required]]     
    });
    
    }

  ngOnInit(): void {
  }
  public sendEmail(e: Event) {
    
    emailjs.sendForm('service_nfq53em', 'template_y5l8iko',  e.target as HTMLFormElement, 'eTwENijSwhbhF5-4q')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        this.toastr.success("Email enviado con exito");
        
      }, (error) => {
        console.log(error.text);
        this.toastr.warning(error.text);
      });
  }
}
