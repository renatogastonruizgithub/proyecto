import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { UsuariosComponent } from '../components/usuarios/usuarios.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { ModalComponent } from 'src/app/dashboard/components/modal/modal.component';
import { AppComponent } from 'src/app/app.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { HeaderComponent } from '../components/header/header.component';
import { HomeComponent } from '../components/home/home.component';
import { SobreComponent } from '../components/sobre/sobre.component';

import { ContactoComponent } from '../components/contacto/contacto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminServicesService } from 'src/app/services/admin-services.service';
import { HttpClientModule } from '@angular/common/http';
import { EditModalComponent } from '../components/edit-modal/edit-modal.component';
import { EducacionComponent } from '../components/educacion/educacion.component';
import { InicioAdminComponent } from '../components/inicio-admin/inicio-admin.component';
import { ToastrModule } from 'ngx-toastr';
import { TrabajosComponent } from '../components/trabajos/trabajos.component';
import { HabilidadesComponent } from '../components/habilidades/habilidades.component';
import { ProyectosComponent } from '../components/proyectos/proyectos.component';

@NgModule({
  declarations: [
    UsuariosComponent,
    DashboardComponent,
    ModalComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    SobreComponent,
    EducacionComponent,
    ContactoComponent,
    EditModalComponent,
    InicioAdminComponent,
    TrabajosComponent,
    HabilidadesComponent,
    ProyectosComponent
   ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
   providers: [AdminServicesService], 
  bootstrap: [AppComponent]
})
export class DashboardModule { }
