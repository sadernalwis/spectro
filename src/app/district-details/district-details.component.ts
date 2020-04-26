import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-district-details',
	templateUrl: './district-details.component.html',
	styleUrls: ['./district-details.component.scss']
})
export class DistrictDetailsComponent implements OnInit {

	// @Input() province: any[];
  @Input() district: string;


	institution_categories = ['Fire Brigades','Police Stations','Hospitals','Banks','Pharmacies','Voting Stations'];
	selectedCategories = [];
	all_institutions = [];

	@Output() selectedInstitutions = new EventEmitter<string[]>();

	constructor() { }

	ngOnInit(): void {
    this.all_institutions = this.institution_categories.map(category => {
      if(category==='Hospitals'){
        return { name: category, isChecked: true };
      }
			return { name: category, isChecked: false };
		});
    this.selectedInstitutions.emit(this.institution_categories);
  }

	changeSelection() {

		// filter out selected categories and extract names as an array
		// this.selectedCategories = this.hospital_categories
		// 	.filter((category, index) => {
		// 		return category.isChecked
		// 	})
		// 	.map(category => { return category.name });

		// this.emitHospitals();
	}

}
