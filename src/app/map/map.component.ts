import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

	center;
	zoom: number;

	constructor() { }

	ngOnInit(): void {
		this.center = { lat: 7.8774222, lng: 80.7003428 };
		this.zoom = 8;
	}

}
