import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../common/material/material.module';
import { ComponentsModule } from '../../components/components.module';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { EducationInfoComponent } from './components/education-info/education-info.component';
import { SendRequestComponent } from './components/send-request/send-request.component';
import { MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  declarations: [
    SignupComponent,
    PersonalInfoComponent,
    ContactInfoComponent,
    SendRequestComponent,
    EducationInfoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SignupRoutingModule,
    MaterialModule,
    MatProgressSpinnerModule,
    ComponentsModule
  ]
})
export class SignupModule { }
