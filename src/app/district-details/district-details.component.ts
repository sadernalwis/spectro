import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-district-details',
	templateUrl: './district-details.component.html',
	styleUrls: ['./district-details.component.scss']
})
export class DistrictDetailsComponent implements OnInit {

	// province: string;
	@Input() district: string;

	constructor() { }

	ngOnInit(): void {
	}

}
