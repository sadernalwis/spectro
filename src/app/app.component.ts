import { Component, ChangeDetectorRef } from '@angular/core';
import { Hospital } from './hospitals/hospital';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	constructor(private cd: ChangeDetectorRef) { }

	selectedDistrict: string;
	selectedHospitals: Hospital[];

	changeSelectedDistrict($event: string) {
		this.selectedDistrict = $event;
		
		// need this because google maps seems to mess with updates
		this.cd.detectChanges(); 
	}

	updateHospitals($hospitals: Hospital[]) {
		this.selectedHospitals = $hospitals;
	}
}
