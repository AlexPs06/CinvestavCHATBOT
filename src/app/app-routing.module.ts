import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { XyzComponent } from './xyz/xyz.component';
import { AbcComponent } from './abc/abc.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MenuProfesorComponent } from './menu-profesor/menu-profesor.component';

const routes: Routes = [
  { path: 'xyz', component: XyzComponent },
  { path: 'abc', component: AbcComponent },
  { path: 'Login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  { path: '**', component: RegisterComponent },
  { path: 'MenuProfesor', component: MenuProfesorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
