import { Injectable } from '@angular/core';

import { User } from '../../../core/models/user';
import { AuthService } from '../../../core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  user: User = {
    firstName: '',
    lastName: '',
    phone: '',
    degree: '',
    employment: '',
    income: 0,
    age: 0,
    zipcode: '',
  };

  constructor(
    private authService: AuthService
  ) { }

  savePersonalInfo(user: User) {
    this.user.firstName = user.firstName;
    this.user.lastName = user.lastName;
  }

  saveContactInfo(user: User) {
    this.user.phone = user.phone;
  }

  saveEducationInfo(user: User) {
    this.user.degree = user.degree;
    this.user.employment = user.employment;
    this.user.income = user.income;
    this.user.age = user.age;
    this.user.zipcode = user.zipcode;
  }

  submit() {
    return this.authService.register(this.user);
  }
}
