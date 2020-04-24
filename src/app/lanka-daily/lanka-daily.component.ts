import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as csv from 'csvtojson';
import { DataService } from '../data.service';
import { ScriptLoaderService } from 'angular-google-charts'

@Component({
	selector: 'app-lanka-daily',
	templateUrl: './lanka-daily.component.html',
	styleUrls: ['./lanka-daily.component.scss']
})
export class LankaDailyComponent implements OnInit, AfterViewInit {

	constructor(private dataService: DataService, private loaderService: ScriptLoaderService) { }

	data = [];
	columns = [];
	options = {};

	ngOnInit(): void {
	}

	ngAfterViewInit(): void {

		// generate the chart only after the chart script are loaded
		this.loaderService.loadChartPackages().subscribe(() => {
			google.charts.setOnLoadCallback(() => {
				this.generateChart();
			});
		});
	}

	async generateChart() {

		const csvData = await this.dataService.getCSVdaily().toPromise();
		const jsonData = await csv().fromString(csvData)

		const confirmed = jsonData[0];
		const died = jsonData[1];
		const recovered = jsonData[2];

		this.columns = ['Date', 'Confirmed', 'Recovered', 'Died'];

		// transform jsondata to the array format used by google charts
		this.data = Object.keys(confirmed).map(date => {
			return [date, Number(confirmed[date]), Number(recovered[date]), Number(died[date])]
		})

		// let chartOptions = {
		// 	title: "Lanka Daily",
		// 	vAxis: {
		// 		title: "People"
		// 	}
		// };

		// this.options = (google.charts as any).Line.convertOptions(chartOptions);
	}

}
