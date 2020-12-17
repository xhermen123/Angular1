import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { SignupService } from './signup.service';
import { AppRoutes } from '../../../common/utils/routes-map.util';

@Injectable({
  providedIn: 'root'
})
export class SignupGuard implements CanActivate {

  constructor(
    private signupService: SignupService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
	if (Boolean(this.signupService.user.firstName && this.signupService.user.lastName && this.signupService.user.phone
		&& this.signupService.user.degree && this.signupService.user.employment && this.signupService.user.income
		&& this.signupService.user.age && this.signupService.user.zipcode)) {
      return true;
    } else {
      this.router.navigate([AppRoutes.Signup]);
      return false;
    }
  }

}
