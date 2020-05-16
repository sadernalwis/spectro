import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleMapsModule } from '@angular/google-maps';
import { MaterialDesignModule } from './material-design/material-design.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MapComponent } from './map/map.component';
import { CurrentStatusComponent } from './current-status/current-status-component';
import { LankaDailyComponent } from './lanka-daily/lanka-daily.component';
import { DistrictDetailsComponent } from './district-details/district-details.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { StackComponentComponent } from './stack-component/stack-component.component';
import { TwitterComponentComponent } from './twitter-component/twitter-component.component';
import { NewsComponentComponent } from './news-component/news-component.component';
import { InstitutionsComponentComponent } from './institutions-component/institutions-component.component';
import { GlobalNewsComponentComponent } from './global-news-component/global-news-component.component';
import { ChartDailyRecoveryComponent } from './chart-daily-recovery/chart-daily-recovery.component';
import { ChartTotalActiveComponent } from './chart-total-active/chart-total-active.component';
import { ChartNewCasesComponent } from './chart-new-cases/chart-new-cases.component';
import { ChartTotalCasesComponent } from './chart-total-cases/chart-total-cases.component';
import { DistrictCasesComponent } from './district-cases/district-cases.component';
import { AppComponent } from './app.component';


@NgModule({
   declarations: [
      HeaderComponent,
      FooterComponent,
      AppComponent,
      MapComponent,
      CurrentStatusComponent,
      LankaDailyComponent,
      DistrictDetailsComponent,
      HospitalsComponent,
      StackComponentComponent,
      TwitterComponentComponent,
      NewsComponentComponent,
      InstitutionsComponentComponent,
      GlobalNewsComponentComponent,
      ChartDailyRecoveryComponent,
      ChartTotalActiveComponent,
      AppComponent,
      ChartNewCasesComponent,
      ChartTotalCasesComponent,
      DistrictCasesComponent

   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      NgApexchartsModule,
      MaterialDesignModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
