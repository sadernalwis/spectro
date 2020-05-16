import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	private HPB_API_URL = 'https://www.hpb.health.gov.lk/api/get-current-statistical';
	private csvDaily = 'https://raw.githubusercontent.com/arimacdev/covid19-srilankan-data/master/Daily/covid_lk.csv';
	private hospitals = '/assets/hospitals.csv';
	private district_data_url = "https://raw.githubusercontent.com/shandhiviyarajan/covid-19-sl-data/master/district-spread.json";

	public static dailyData: any;
	constructor(private http: HttpClient) { }

	getHPBdata() {
		return this.http.get(this.HPB_API_URL);
	}

	getCSVdaily() {

		return this.http.get(this.csvDaily, { responseType: 'text' });
	}

	getHostpitals() {
		return this.http.get(this.hospitals, { responseType: 'text' });
	}
	getNEWS(query) {
		const api_key = '3e8e02219bfd46adac9f6b43b06f908f';
		const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${api_key}`;
		return this.http.get(url, { responseType: 'text' });
	}

	getDistrictData() {
		return this.http.get(this.district_data_url, { responseType: 'json' });
	}


}
