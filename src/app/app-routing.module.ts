import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { XyzComponent } from '../components/xyz/xyz.component';
import { AbcComponent } from '../components/abc/abc.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { MenuComponent } from '../components/menu/menu.component';
import { ChatbotComponent } from '../components/chatbot/chatbot.component';

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
