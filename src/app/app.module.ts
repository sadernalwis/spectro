import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { GoogleChartsModule } from 'angular-google-charts';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { HpbComponent } from './hpb/hpb.component';
import { LankaDailyComponent } from './lanka-daily/lanka-daily.component';
import { DistrictDetailsComponent } from './district-details/district-details.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { StackComponentComponent } from './stack-component/stack-component.component';
import { TwitterComponentComponent } from './twitter-component/twitter-component.component';
import { NewsComponentComponent } from './news-component/news-component.component';

@NgModule({
   declarations: [
      AppComponent,
      MapComponent,
      HpbComponent,
      LankaDailyComponent,
      DistrictDetailsComponent,
      HospitalsComponent,
      StackComponentComponent,
      TwitterComponentComponent,
      NewsComponentComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      GoogleMapsModule,
      HttpClientModule,
      MatCardModule,
      MatCheckboxModule,
      GoogleChartsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
