import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
	selector: 'app-hpb',
	templateUrl: './hpb.component.html',
	styleUrls: ['./hpb.component.scss']
})
export class HpbComponent implements OnInit {

	constructor(private dataService: DataService) { }

	hpbResponse: any;

	ngOnInit(): void {

		this.getHPBresponse();
	}

	async getHPBresponse() {
		this.hpbResponse = await this.dataService.getHPBdata().toPromise();
		console.log(this.hpbResponse);
	}

}
