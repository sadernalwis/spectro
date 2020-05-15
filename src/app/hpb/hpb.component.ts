import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
	selector: 'app-status-component',
	templateUrl: './hpb.component.html',
	styleUrls: ['./hpb.component.scss']
})
export class HpbComponent implements OnInit {

	constructor(private dataService: DataService) { }

	hpbResponse: any;
	daily_updates: any;
	total_deaths: String;
	new_deaths: String;
	new_cases: String;
	new_recovery: any;
	total_recovered: any;


	ngOnInit(): void {

		this.getHPBresponse();
		this.getDailyUpdates();

		setTimeout(() => {
			this.getHPBresponse();
		}, 150000);
	}


	addZero(data): String {

		let n: any = parseInt(data);
		if (n >= 10 && n > 0) {
			return n;
		} else {
			return '0' + n;
		}
	}

	async getHPBresponse() {
		this.hpbResponse = await this.dataService.getHPBdata().toPromise();
		this.total_deaths = this.addZero(this.hpbResponse.data.local_deaths);
		this.total_recovered = this.addZero(this.hpbResponse.data.local_recovered);
		this.new_cases = this.addZero(this.hpbResponse.data.local_new_cases);
		this.new_deaths = this.addZero(this.hpbResponse.data.local_new_deaths);

	}


	async getDailyUpdates() {
		this.daily_updates = await this.dataService.getCSVdaily().toPromise();
		this.daily_updates = this.daily_updates.split(/\r\n|\n/)[3].split(",").reverse();
		this.new_recovery = parseInt(this.total_recovered) - parseInt(this.daily_updates[0]);


	}

}
