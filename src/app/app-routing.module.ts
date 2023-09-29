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
  ]
},
{ path: 'login' , component: LoginComponent},
{ path: '', redirectTo:'/dashboard', pathMatch: 'full'}
]


//const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
