import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { GoogleChartsModule } from 'angular-google-charts';
import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    GoogleChartsModule,
    GoogleMapsModule
  ],
  exports: [
    MatGridListModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    GoogleChartsModule,
    GoogleMapsModule
  ]
})
export class MaterialDesignModule { }
