import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	constructor(private cd: ChangeDetectorRef) { }

	selectedDistrict: string;

	changeSelectedDistrict($event: string) {
		this.selectedDistrict = $event;
		
		// need this because google maps seems to mess with updates
		this.cd.detectChanges(); 
	}
}
