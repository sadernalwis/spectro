import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	private HPB_API_URL = 'https://www.hpb.health.gov.lk/api/get-current-statistical';
	private csvDaily = 'https://raw.githubusercontent.com/arimacdev/covid19-srilankan-data/master/Daily/covid_lk.csv';
  private hospitals = '/assets/hospitals.csv';
  private news = 'https://173.82.173.9:443/news';

	constructor(private http: HttpClient) { }

	getHPBdata() {
		return this.http.get(this.HPB_API_URL);
	}

	getCSVdaily() {
		return this.http.get(this.csvDaily, {responseType: 'text'});
	}

	getHostpitals() {
		return this.http.get(this.hospitals, {responseType: 'text'});
	}
	getNEWS(query) {
		return this.http.get(this.news+`/${query}`, {responseType: 'text'});
	}
}
