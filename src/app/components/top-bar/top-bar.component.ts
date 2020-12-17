import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
	open: boolean = false;
	constructor() { }

	ngOnInit() {
	}

	onMenu() {
		this.open = !this.open;
	}
}
