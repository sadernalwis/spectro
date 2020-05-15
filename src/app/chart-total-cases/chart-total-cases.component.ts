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
  selector: 'app-chart-total-cases',
  templateUrl: './chart-total-cases.component.html'
})
export class ChartTotalCasesComponent implements OnInit {


  @ViewChild('chart') chart: ChartComponent;
  public options: any;
  dailyStats: any;
  dataSeries: any = [];


  constructor(private dataService: DataService) {

    this.drawDonutChart();


  }

  async drawDonutChart() {
    this.dailyStats = await this.dataService.getHPBdata().toPromise();

    this.dataSeries.push(this.dailyStats.data.local_active_cases);
    this.dataSeries.push(this.dailyStats.data.local_recovered);
    this.dataSeries.push(this.dailyStats.data.local_deaths);

    this.options = {
      series: this.dataSeries,
      labels: ['Active Cases', 'Recovered', 'Deaths'],
      colors: ['#FFAA0E', '#47AC47', '#DA2820'],
      dataLabels: {
        formatter: function (val, opts) {
          return opts.w.config.series[opts.seriesIndex];
        },
      },
      fill: {
        colors: ['#FFAA0E', '#47AC47', '#DA2820']
      },
      legend: {
        position: 'bottom',
        markers: {
          colors: ['#FFAA0E', '#47AC47', '#DA2820']
        },
        formatter: function (seriesName, opts) {
          return [seriesName, ' - ', opts.w.globals.series[opts.seriesIndex]];
        }
      },
      chart: {
        height: 320,
        width: '100%',
        type: 'donut'
      }
    };

  }

  ngOnInit(): void {
  }

}
