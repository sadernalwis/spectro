import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataService } from '../data.service';
import * as csv from 'csvtojson';
import { Hospital } from './hospital';

@Component({
	selector: 'app-hospitals',
	templateUrl: './hospitals.component.html',
	styleUrls: ['./hospitals.component.scss']
})
export class HospitalsComponent implements OnInit {

	hospital_categories = [];
	selectedCategories = [];
	all_hospitals = [];

	@Output() selectedHospitals = new EventEmitter<Hospital[]>();

	constructor(private dataService: DataService) { }

	ngOnInit(): void {
		this.getHospitalData();
	}

	async getHospitalData() {

		const csvData = await this.dataService.getHostpitals().toPromise();
		this.all_hospitals = await csv().fromString(csvData)

		// get unique list of categories
		const categories = Array.from(new Set(this.all_hospitals.map(h => {
			return h.hospital_category;
		}))).sort();

		// create array containing objects to bind to checkboxes
		this.hospital_categories = categories.map(category => {
			return { name: category, isChecked: false };
		});

	}

	changeSelection() {

		// filter out selected categories and extract names as an array
		this.selectedCategories = this.hospital_categories
			.filter((category, index) => {
				return category.isChecked
			})
			.map(category => { return category.name });

		this.emitHospitals();
	}

	emitHospitals() {

		const hospitals: Hospital[] = this.all_hospitals
			.filter(h => {
				return this.selectedCategories.includes(h.hospital_category)
			})
			.map(h => {
				return {
					name: h.hospital_name,
					category: h.hospital_category,
					location: {
						lat: Number(h.y_coordinate),
						lng: Number(h.x_coordinate)
					}
				};
			});

		this.selectedHospitals.emit(hospitals);
	}

}
