import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import {
  ChartComponent,
  ApexNonAxisChartSeries,
  ApexLegend,
  ApexChart,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexGrid,
  ApexFill,
  ApexMarkers,

} from 'ng-apexcharts';
@Component({
  selector: 'app-chart-new-cases',
  templateUrl: './chart-new-cases.component.html'
})


export class ChartNewCasesComponent implements OnInit {

  @ViewChild('chart') chart: ChartComponent;
  daily_updates: any;
  daily_cases: any = [];
  daily_new_cases: any = [];
  date_list: any = [];
  public chartOptions: any;

  constructor(private dataService: DataService) {

    this.getNewCases();

  }




  async getNewCases() {


    this.daily_updates = await this.dataService.getCSVdaily().toPromise();
    this.date_list = this.daily_updates.split(/\r\n|\n/)[0].split(',');
    this.daily_cases = this.daily_updates.split(/\r\n|\n/)[1].split(',');

    this.date_list = this.date_list.reverse().slice(0, 20);
    this.date_list.reverse();

    this.daily_cases = this.daily_cases.reverse().slice(0, 21);
    this.daily_cases.reverse();

    this.daily_cases.forEach((v, i) => {
      if (i < 20) {
        this.daily_new_cases.push((this.daily_cases[i + 1] - v));
      }

    });




    this.chartOptions = {
      series: [
        {
          name: 'Daily new cases',
          data: this.daily_new_cases
        }

      ],
      plotOptions: {
        bar: {
          dataLabels: {
            position: 'top' // top, center, bottom
          }
        }
      },
      colors: ['#1478E9'],
      dataLabels: {
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ['#304758']
        }
      },

      chart: {
        height: 350,
        type: 'bar',
        toolbar: {
          show: false
        }
      },
      xaxis: {
        type: 'datetime',
        categories: this.date_list,
        position: 'bottom'
      },
      title: {
        text: '',
      },
      fill: {
        type: 'solid',
        colors: ['#1478E9'],

      },

      yaxis: {
        min: 0,
        max: 70,
        title: {
          text: ''
        }
      }
    };
  }

  ngOnInit(): void {

  }

}
