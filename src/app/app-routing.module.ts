import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { XyzComponent } from './components/xyz/xyz.component';
import { AbcComponent } from './components/abc/abc.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MenuComponent } from './components/menu/menu.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { RouteGuardGuard } from './guardians/route-guard/route-guard.guard';
import { LoginRegisterGuard } from './guardians/loginRegister/login-register.guard';

const routes: Routes = [
  { path: 'xyz', component: XyzComponent, },
  { path: 'abc', component: AbcComponent },
  { path: 'Login', component: LoginComponent,canActivate:[LoginRegisterGuard] },
  { path: '', component: LoginComponent  },
  { path: 'Register', component: RegisterComponent,canActivate:[LoginRegisterGuard]  },
  { path: '**', redirectTo: "not_found" },
  { path: 'notFound', redirectTo: "not_found" },
  { path: 'Menu', component: MenuComponent, canActivate:[RouteGuardGuard] },
  { path: 'Chatbot', component: ChatbotComponent, canActivate:[RouteGuardGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
