import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CargaLoaderService } from './carga-loader.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TrabajosComponent } from './pages/trabajos/trabajos.component';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { Error404Component } from './pages/error404/error404.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuTogleComponent } from './shared/menu-togle/menu-togle.component';
import { AsideComponent } from './shared/aside/aside.component';
import { CardWorksComponent } from './shared/card-works/card-works.component';

import { LoaderComponent } from './shared/loader/loader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './pages/login/login.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsComponent } from './shared/skills/skills.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { RegistrarseComponent } from './pages/registrarse/registrarse.component';


@NgModule({
  declarations: [    
    AppComponent,
    NavComponent,
    FooterComponent,
    TrabajosComponent,
    SobreMiComponent,
    ContactoComponent,
    Error404Component,
    InicioComponent,
    MenuTogleComponent,
    AsideComponent,
    CardWorksComponent,  
    LoaderComponent,
     LoginComponent,
     SkillsComponent,
     RegistrarseComponent,
  
    
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,    
    ToastrModule.forRoot(),
    NgCircleProgressModule.forRoot({    
    })
  ],
  providers: [CargaLoaderService],
  bootstrap: [AppComponent]
   
})
export class AppModule { }
