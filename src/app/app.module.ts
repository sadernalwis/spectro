import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from './map/map.component';
import { HpbComponent } from './hpb/hpb.component';

import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { LankaDailyComponent } from './lanka-daily/lanka-daily.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { DistrictDetailsComponent } from './district-details/district-details.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		MapComponent,
		HpbComponent,
		LankaDailyComponent,
		DistrictDetailsComponent,
		HospitalsComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		GoogleMapsModule,
		HttpClientModule,
		MatCardModule,
		MatCheckboxModule,
		GoogleChartsModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
