import { NgModule } from '@angular/core';
import { Routes, RouterModule,  } from '@angular/router';


import { PrincipalComponent } from './modulos/principal.component';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { LoginComponent } from './modulos/login/login.component';



const Routes: Routes = [
{ 
  path: '', component: PrincipalComponent,
children:[
  {path: 'dashboard' , component: DashboardComponent},
  { path: '', redirectTo:'/dashboard', pathMatch: 'full'}
  ]
},
{ path: 'login' , component: LoginComponent},

]


//const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
