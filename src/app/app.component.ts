import { Component, ChangeDetectorRef } from '@angular/core';
import { Hospital } from './hospitals/hospital';
import { SocketService } from './services/socket.service';

@Component({
  selector: 'app-root',
  // tslint:disable-next-line: indent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private cd: ChangeDetectorRef,
    private socketService: SocketService
  ) {
    //  Initiating socket conncetion
    socketService.createSocket();
  }
  selectedDistrict: string;
  selectedHospitals: Hospital[];
  selectedInstitutions: string[];

  changeSelectedDistrict($event: string) {
    this.selectedDistrict = $event;

    // need this because google maps seems to mess with updates
    this.cd.detectChanges();
  }

  updateHospitals($hospitals: Hospital[]) {
    this.selectedHospitals = $hospitals;
  }
}
