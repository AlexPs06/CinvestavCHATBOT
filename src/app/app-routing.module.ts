import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { XyzComponent } from './xyz/xyz.component';
import { AbcComponent } from './abc/abc.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MenuComponent } from './menu/menu.component';
import { ChatbotComponent } from './chatbot/chatbot.component';

const routes: Routes = [
  { path: 'xyz', component: XyzComponent },
  { path: 'abc', component: AbcComponent },
  { path: 'Login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  { path: '**', redirectTo: "not_found" },
  { path: 'Menu', component: MenuComponent },
  { path: 'Chatbot', component: ChatbotComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
