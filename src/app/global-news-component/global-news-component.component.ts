import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-global-news-component',
  templateUrl: './global-news-component.component.html',
  styleUrls: ['./global-news-component.component.css']
})
export class GlobalNewsComponentComponent implements OnInit {

	news = {
    status: '',
    totalResults: 0,
    articles: [
      {
        source: [{}],
        author: '',
        title: '',
        description: '',
        url:'',
        urlToImage:'',
        publishedAt:'',
        content:''
      }]
  };
	constructor(private dataService: DataService) {

    // console.error("search is on"); // log to console instead
    // this.addHero("search");
  }

	ngOnInit() {
    this.getNews();
	}

	async getNews() {

    const data = await this.dataService.getNEWS("sri+lanka").toPromise();
    if(!data){
      console.log("no news data.");
    }else{
      console.log("news data available.");
      this.news = JSON.parse(data);
    }

	}

}
