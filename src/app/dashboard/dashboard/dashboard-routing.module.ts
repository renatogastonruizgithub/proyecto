import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from 'src/app/dashboard/components/modal/modal.component';
import { GuardsDashboardGuard } from 'src/app/guards/guards-dashboard.guard';

import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { EducacionComponent } from '../components/educacion/educacion.component';
import { HabilidadesComponent } from '../components/habilidades/habilidades.component';

import { InicioAdminComponent } from '../components/inicio-admin/inicio-admin.component';
import { ProyectosComponent } from '../components/proyectos/proyectos.component';
import { SobreComponent } from '../components/sobre/sobre.component';
import { TrabajosComponent } from '../components/trabajos/trabajos.component';

import { UsuariosComponent } from '../components/usuarios/usuarios.component';

const routes: Routes = [ 
  
  {path:'',component:DashboardComponent, canActivate:[GuardsDashboardGuard],
  
  children:[ 
    {path:'',component:InicioAdminComponent},
    {path:"usuarios",component:UsuariosComponent},   
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
