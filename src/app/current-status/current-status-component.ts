import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
	selector: 'app-current-status',
	templateUrl: './current-status-component.html'
})
export class CurrentStatusComponent implements OnInit {

	constructor(private dataService: DataService) { }

	hpbResponse: any;
	daily_updates: any;
	total_deaths: String;
	new_deaths: String;
	new_cases: String;
	new_recovery: any;
	total_recovered: any;
	growth_rate: any = 0;
	local_total_cases: any;
	hospitalized: any;


	ngOnInit(): void {

		this.getHPBresponse();



	}


	addZero(string): String {

		let n: any = Math.floor(string);
		if (n >= 10 && n > 0) {
			return n;
		} else if (n === 0) {
			return n;
		} else {
			return '0' + n;
		}
	}

	async getHPBresponse() {
		this.hpbResponse = await this.dataService.getHPBdata().toPromise();
		this.daily_updates = await this.dataService.getCSVdaily().toPromise();
		this.local_total_cases = this.hpbResponse.data.local_total_cases;
		this.total_deaths = this.addZero(this.hpbResponse.data.local_deaths);
		this.total_recovered = this.addZero(this.hpbResponse.data.local_recovered);
		this.new_cases = this.addZero(this.hpbResponse.data.local_new_cases);
		this.new_deaths = this.addZero(this.hpbResponse.data.local_new_deaths);
		this.hospitalized = this.hpbResponse.data.local_total_number_of_individuals_in_hospitals;

		this.growth_rate = ((this.local_total_cases / this.hpbResponse.data.total_pcr_testing_count) * 100).toFixed(2);

		this.daily_updates = this.daily_updates.split(/\r\n|\n/)[3].split(',').reverse();
		this.new_recovery = Math.floor(this.total_recovered) - Math.floor(this.daily_updates[0]);

	}




}
