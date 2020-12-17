import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignupService } from '../../services/signup.service';
import { Router } from '@angular/router';
import { AppRoutes } from 'src/app/common/utils/routes-map.util';

@Component({
  selector: 'app-education-info',
  templateUrl: './education-info.component.html',
  styleUrls: ['./education-info.component.scss']
})
export class EducationInfoComponent implements OnInit {
	degrees: string[] = [
		"Associate degree",
		"Bachelor's degree",
		"Master's degree",
		"Doctoral degree",
	];
	employmentStatus: string[] = [
		"Employed",
		"Unemployed",
		"Contractor",
		"Student",
		"Other",
	];
	min: string = '0';
	max: string = '100000';
	tickInterval: string = "1000";
	value: string;
	step: number = 1;
	thumbLabel: boolean = true;


	form: FormGroup;

	constructor(private fb: FormBuilder,
		private signupService: SignupService,
		private router: Router) { }

	ngOnInit() {
		this.form = this.fb.group({
			degree: [this.signupService.user.degree || '', Validators.required],
			employment: [this.signupService.user.employment || '', Validators.required],
			income: [this.signupService.user.income || '', Validators.required],
			age: [this.signupService.user.age || '', [Validators.required, Validators.pattern("^[1-9]{1}[0-9]{0,1}$")]],
			zipcode: [this.signupService.user.zipcode || '', Validators.required],
		});
	}

	next() {
		if(this.form.valid) {
			this.signupService.saveEducationInfo(this.form.value);
			this.router.navigate([AppRoutes.SignupSubmit]);
		}
	}


	prev() {
		this.signupService.saveContactInfo(this.form.value);
		this.router.navigate([AppRoutes.SignupContactInfo]);
	}

	formatLabel(value: number | null) {
		if(!value) {
			return 0;
		}
		if(value >= 1000) {
			return Math.round(value/1000) + "k";
		}
		return value;
	}
}
