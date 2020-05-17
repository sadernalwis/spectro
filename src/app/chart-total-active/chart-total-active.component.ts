import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexFill,
  ApexMarkers,
  ApexYAxis
} from 'ng-apexcharts';



@Component({
  selector: 'app-chart-total-active',
  templateUrl: './chart-total-active.component.html'
})
export class ChartTotalActiveComponent implements OnInit {

  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: any;
  daily_updates: any;
  daily_cases: any;
  daily_active: any = [];
  daily_recovery: any;
  daily_death: any;
  date_list: any;
  d: any;
  constructor(private dataService: DataService) {
    this.getDailyUpdates();
  }

  async getDailyUpdates() {
    this.daily_updates = await this.dataService.getCSVdaily().toPromise();
    this.date_list = this.daily_updates.split(/\r\n|\n/)[0].split(',');
    this.daily_cases = this.daily_updates.split(/\r\n|\n/)[1].split(',');
    this.daily_death = this.daily_updates.split(/\r\n|\n/)[2].split(',');
    this.daily_recovery = this.daily_updates.split(/\r\n|\n/)[3].split(',');

    this.daily_cases.forEach((v, i) => {
      this.d = v - (this.daily_recovery[i]);
      this.daily_active.push(this.d);
    });

    this.chartOptions = {
      series: [
        {
          name: 'Total Cases',
          data: this.daily_cases
        },
        {
          name: 'Active Cases',
          data: this.daily_active
        },
        {
          name: 'Recovered',
          data: this.daily_recovery
        },

        {
          name: 'Deaths',
          data: this.daily_death
        }
      ],
      colors: ['#FA585B', '#FFAA0E', '#47AC47', '#000000'],

      chart: {
        height: 350,
        width: '100%',
        type: 'line',
        toolbar: {
          show: false
        }
      },
      stroke: {
        width: 5,
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: this.date_list
      },
      title: {
        text: '',
      },
      fill: {
        type: 'solid',
        colors: ['#FA585B', '#FFAA0E', '#47AC47', '#000000']

      },
      markers: {
        size: 0,
        colors: ['#FA585B', '#FFAA0E', '#47AC47', '#000000'],

        hover: {
          size: 10
        }
      },
      legend: {
        position: 'top', markers: {
          fillColors: ['#FA585B', '#FFAA0E', '#47AC47', '#000000'],
        }
      },
      tooltip: {

      },

      yaxis: {
        min: 0,
        max: 1000,
        title: {
          text: ''
        }
      }
    };
  }

  ngOnInit(): void {
  }

}
