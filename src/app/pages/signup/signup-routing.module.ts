import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupGuard } from './services/signup.guard';

import { SignupComponent } from './signup.component';
import { ProgressComponent } from '../../components/progress/progress.component'

import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { SendRequestComponent } from './components/send-request/send-request.component';
import { EducationInfoComponent } from './components/education-info/education-info.component';

const routes: Routes = [
  {
    path: '', component: SignupComponent, children: [
      {
        path: '', component: PersonalInfoComponent
      }, {
        path: 'contact', component: ContactInfoComponent
      }, {
        path: 'education', component: EducationInfoComponent
      }, {
        path: 'submit', component: SendRequestComponent, canActivate: [SignupGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
