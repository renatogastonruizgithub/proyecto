import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { UsuariosComponent } from '../components/usuarios/usuarios.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { ModalComponent } from 'src/app/dashboard/components/modal/modal.component';
import { AppComponent } from 'src/app/app.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { HeaderComponent } from '../components/header/header.component';

import { SobreComponent } from '../components/sobre/sobre.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminServicesService } from 'src/app/services/admin-services.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EditModalComponent } from '../components/edit-modal/edit-modal.component';
import { EducacionComponent } from '../components/educacion/educacion.component';
import { InicioAdminComponent } from '../components/inicio-admin/inicio-admin.component';
import { ToastrModule } from 'ngx-toastr';
import { TrabajosComponent } from '../components/trabajos/trabajos.component';
import { HabilidadesComponent } from '../components/habilidades/habilidades.component';
import { ProyectosComponent } from '../components/proyectos/proyectos.component';
import { AuthInterceptorsService } from 'src/app/interceptors/auth-interceptors.service';
import { LoaderDashboardComponent } from '../components/loader-dashboard/loader-dashboard.component';

@NgModule({
  declarations: [
    UsuariosComponent,
    DashboardComponent,
    ModalComponent,
    HeaderComponent,
    SidebarComponent,
    SobreComponent,
    EducacionComponent,    
    EditModalComponent,
    InicioAdminComponent,
    TrabajosComponent,
    HabilidadesComponent,
    ProyectosComponent,
    LoaderDashboardComponent
   ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
    HttpClientModule,
    ToastrModule.forRoot(  {
      timeOut: 2000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
  ],
   providers: [AdminServicesService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorsService,
    multi: true
  }], 
  bootstrap: [AppComponent]
})
export class DashboardModule { }
