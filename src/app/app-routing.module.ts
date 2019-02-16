import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
   path: 'home',
   loadChildren: './post-login/post-login.module#PostLoginModule', //Lazy load account module
  
 },{
   path: 'login',
   loadChildren: '../pre-login/pre-login.module#PreLoginModule', //Lazy load Pre Login module
 },{
   path: '',
   redirectTo: 'login',
   pathMatch: 'full'
 }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
