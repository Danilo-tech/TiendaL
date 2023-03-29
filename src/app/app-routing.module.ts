import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './modulos/principal.component';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { LoginComponent } from './modulos/login/login.component';


const routes: Routes = [
  {
    path: '', component: PrincipalComponent,
      children:[
        {path:'dashboard', component:DashboardComponent},
        {path:'', redirectTo: '/dashboard', pathMatch:'full'},
       /*  {path:'usuarios', component:UsuariosComponent}, */
      ]
  },
  {path: 'login', component: LoginComponent},
]

/* // por defecto
const routes: Routes = []; */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
