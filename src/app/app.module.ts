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


@NgModule({
	declarations: [
		AppComponent,
		MapComponent,
		HpbComponent,
		LankaDailyComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		GoogleMapsModule,
		HttpClientModule,
		MatCardModule,
		GoogleChartsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
