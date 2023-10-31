import { NgModule } from '@angular/core';
import { Routes, RouterModule,  } from '@angular/router';


import { PrincipalComponent } from './modulos/principal.component';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { LoginComponent } from './modulos/login/login.component';
import { UsuarioComponent } from './modulos/usuario/usuario.component';
import { ContenidoComponent } from './modulos/contenido/contenido.component';



const Routes: Routes = [
{ 
  path: '', component: PrincipalComponent,
children:[
  {path: 'dashboard' , component: DashboardComponent},
  {path: 'usuario' , component: UsuarioComponent},
  { path: '', redirectTo:'/dashboard', pathMatch: 'full'},
  { path: 'contenidos', component:ContenidoComponent}
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
