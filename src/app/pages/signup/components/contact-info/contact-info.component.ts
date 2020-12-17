import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SignupService } from '../../services/signup.service';
import { AppRoutes } from '../../../../common/utils/routes-map.util';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {

	form: FormGroup;

	constructor(
	private fb: FormBuilder,
	private signupService: SignupService,
	private router: Router
	) { }

	ngOnInit() {
	this.form = this.fb.group({
		phone: [this.signupService.user.phone || '', Validators.required]
	});
	}

	next() {
		if(this.form.valid) {
			this.signupService.saveContactInfo(this.form.value);
			this.router.navigate([AppRoutes.SignupEducationInfo]);
		}
	}

	prev() {
	this.signupService.saveContactInfo(this.form.value);
	this.router.navigate([AppRoutes.Signup]);
	}

}
