import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from 'src/app/dashboard/components/modal/modal.component';
import { ContactoComponent } from '../components/contacto/contacto.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { EducacionComponent } from '../components/educacion/educacion.component';
import { HomeComponent } from '../components/home/home.component';
import { SobreComponent } from '../components/sobre/sobre.component';

import { UsuariosComponent } from '../components/usuarios/usuarios.component';

const routes: Routes = [ 
  
  {path:'',component:DashboardComponent, 
  
  children:[ 
    {path:"usuarios",component:UsuariosComponent},
    {path:"home",component:HomeComponent},
    {path:"sobre",component:SobreComponent},
    
    {path:"educacion",component:EducacionComponent},
    {path:"contacto",component:ContactoComponent},    
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
