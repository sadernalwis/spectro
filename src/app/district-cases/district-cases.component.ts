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
  selector: 'app-district-cases',
  templateUrl: './district-cases.component.html'
})

export class DistrictCasesComponent implements OnInit {

  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: any;
  districts: any;
  district_names: any = [];
  district_cases: any = [];
  constructor(private dataService: DataService) {


    this.getDistrictData();
  }

  async getDistrictData() {
    this.districts = await this.dataService.getDistrictData().toPromise();
    this.districts.sort((a, b) => b.count - a.count);
    this.districts.forEach(v => {

      this.district_cases.push(v.count);
      this.district_names.push(v.name);

    });

    this.chartOptions = {
      series: [
        {
          name: 'District count',
          data: this.district_cases
        }
      ],
      plotOptions: {
        bar: {
          dataLabels: {
            position: 'top' // top, center, bottom
          }
        }
      },
      colors: ['#FA585B'],
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
        type: 'District Names',
        categories: this.district_names,
        position: 'bottom'
      },
      fill: {
        type: 'solid',
        colors: ['#FA585B'],

      },
      yaxis: {
        min: 0,
        max: 600,
        title: {
          text: ''
        }
      }
    };
  }

  ngOnInit(): void {
  }

}
