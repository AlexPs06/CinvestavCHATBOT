import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { XyzComponent } from './xyz/xyz.component';
import { AbcComponent } from './abc/abc.component';

const routes: Routes = [
  { path: 'xyz', component: XyzComponent },
  { path: 'abc', component: AbcComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
