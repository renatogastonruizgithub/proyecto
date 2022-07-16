import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactoComponent } from './pages/contacto/contacto.component';
import { Error404Component } from './pages/error404/error404.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrarseComponent } from './pages/registrarse/registrarse.component';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi.component';
import { TrabajosComponent } from './pages/trabajos/trabajos.component';


const routes: Routes = [
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
   {path: 'inicio',component: InicioComponent},
    {path: 'trabajos', component: TrabajosComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'sobre', component: SobreMiComponent},
    {path: 'login', component: LoginComponent},
     {path: 'registro', component: RegistrarseComponent}, 
    {path: 'admin',
      loadChildren: () => import('./dashboard/dashboard/dashboard.module').then(m => m.DashboardModule),
    
    },      
  {path: '**', component: Error404Component},   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
