import { Routes } from '@angular/router';
import { LoginComponent } from './Componentes/login/login.component';
import { BienvenidoComponent } from './Componentes/bienvenido/bienvenido.component';
import { ErrorComponent } from './Componentes/error/error.component';

export const routes: Routes = 
[
    {path:'', redirectTo:'Login', pathMatch:'full'},
    {path:'Login', component: LoginComponent},
    {path:'Bienvenido', component: BienvenidoComponent},
    {path:'Error', component: ErrorComponent},
    {path:'**', component: ErrorComponent},
];
