import { Component, OnInit, ViewChild, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {
	
	@ViewChild(GoogleMap) gmap: GoogleMap;

	center;
	zoom: number;
	
	@Output() selectedDistrict = new EventEmitter<string>();
	
	constructor() { }
	
	ngOnInit(): void {
		this.center = { lat: 7.8774222, lng: 80.7003428 };
		this.zoom = 8;
	}

	ngAfterViewInit(): void {
		this.gmap.data.loadGeoJson('/assets/districts.geojson');

		this.gmap.data.setStyle({
			strokeWeight: 1,
			strokeColor: 'black',
			fillColor: 'grey',
			fillOpacity: 0.8
		})

		this.gmap.data.addListener('mouseover', (event) => {
			// console.log(event.feature.j.province_name);
			// console.log(event.feature.getProperty('district_name'));
			this.selectedDistrict.emit(event.feature.getProperty('district_name'));
		});
	}
}
