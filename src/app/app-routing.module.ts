import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/anon-pages/home-page/home-page.component';


const routes: Routes = [
  {
    path: '', component: HomePageComponent
  }, {
    path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
