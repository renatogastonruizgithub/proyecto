import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from 'src/app/dashboard/components/modal/modal.component';
import { ContactoComponent } from '../components/contacto/contacto.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { EducacionComponent } from '../components/educacion/educacion.component';
import { HabilidadesComponent } from '../components/habilidades/habilidades.component';
import { HomeComponent } from '../components/home/home.component';
import { InicioAdminComponent } from '../components/inicio-admin/inicio-admin.component';
import { ProyectosComponent } from '../components/proyectos/proyectos.component';
import { SobreComponent } from '../components/sobre/sobre.component';
import { TrabajosComponent } from '../components/trabajos/trabajos.component';

import { UsuariosComponent } from '../components/usuarios/usuarios.component';

const routes: Routes = [ 
  
  {path:'',component:DashboardComponent, 
  
  children:[ 
    {path:'',component:InicioAdminComponent},
    {path:"usuarios",component:UsuariosComponent},
    {path:"home",component:HomeComponent},
    {path:"sobre",component:SobreComponent},    
    {path:"educacion",component:EducacionComponent},
    {path:"trabajos",component:TrabajosComponent},
    {path:"habilidades",component:HabilidadesComponent},
    {path:"proyectos",component:ProyectosComponent},      
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
