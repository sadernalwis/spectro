import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-global-news-component',
  templateUrl: './global-news-component.component.html'
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
        url: '',
        urlToImage: '',
        publishedAt: '',
        content: ''
      }]
  };

  sl_news: any = [];
  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.getNews();

  }




  async getNews() {

    // const data = await this.dataService.getNEWS("sri+lanka").toPromise();
    // if (!data) {
    //   console.log("no news data.");
    // } else {
    //   console.log("news data available.");
    //   this.news = JSON.parse(data);
    // }

    this.sl_news = await this.dataService.getSLNews().toPromise();
    console.log(this.sl_news);

  }

}
