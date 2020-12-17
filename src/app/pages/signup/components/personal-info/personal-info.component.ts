import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SignupService } from '../../services/signup.service';
import { AppRoutes } from '../../../../common/utils/routes-map.util';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

	form: FormGroup;

	constructor(
	private signupService: SignupService,
	private fb: FormBuilder,
	private router: Router
	) { }

	ngOnInit() {
		this.form = this.fb.group({
			firstName: [this.signupService.user.firstName || '', Validators.required],
			lastName: [this.signupService.user.lastName || '', Validators.required],
		});
	}

	next() {
		if(this.form.valid) {
			this.signupService.savePersonalInfo(this.form.value);
			this.router.navigate([AppRoutes.SignupContactInfo]);
		}
	}

	prev() {
		this.signupService.savePersonalInfo(this.form.value);
		this.router.navigate([AppRoutes.Home]);
	}

}
