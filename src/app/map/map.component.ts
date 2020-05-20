import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  EventEmitter,
  Output,
  Input,
} from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import * as MarkerClusterer from '@google/markerclustererplus';
import { Hospital } from '../hospitals/hospital';
import { DataService } from '../data.service';
import { mark } from '@angular/compiler-cli/src/ngtsc/perf/src/clock';
import { SocketService } from '../services/socket.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit {
  @ViewChild(GoogleMap) gmap: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;
  dronePositions = [];
  center: Object = { lat: 7.669722 + 0.2, lng: 80.645556 + 0.5 };
  nalanda_gedige: any;
  zoom: number;
  districts: any;
  single_district: any = [];
  activeMarkers: any;
  mapType: 'district';

  @Output() selectedDistrict = new EventEmitter<any[]>();

  _hospitals: Hospital[];
  get hospitals(): Hospital[] {
    return this._hospitals;
  }
  @Input('hospitals')
  set hospitals(value: Hospital[]) {
    this._hospitals = value;
  }

  hospitalMarkerOptions: google.maps.MarkerOptions;
  label_options: any;
  district_infections = [];
  other_infections = [];

  di: any;
  marker_url: any;
  drone_marker_url = '/assets/images/drone.svg';
  district_name: any;
  drone_name = 'Drone';

  constructor(
    private dataService: DataService,
    private socketService: SocketService
  ) {}

  ngOnInit(): void {
    // this.nalanda_gedige ={ lat: 7.669722, lng: 80.645556 };
    this.nalanda_gedige = { lat: 7.669722 + 0.2, lng: 80.645556 + 0.5 };
    // this.center = { lat: 7.8774222, lng: 80.7003428 };
    this.center = this.nalanda_gedige;
    this.zoom = 7;

    this.hospitalMarkerOptions = {
      icon: '/assets/hospital-marker.png',
    };

    this.getDistrictData();

    // Listening to the socket server topic of 'CLIENT'
    this.socketService.getMessages('CLIENT').subscribe((data) => {
      console.log('data', data);
      this.addMarker(data);
    });

    //   Removing the markers on disconnection
    this.socketService.getMessages('DISCONNECT').subscribe((data) => {
      console.log('disconnect', data);
      this.removeDroneMarker(data);
    });
  }

  async getDistrictData() {
    this.districts = await this.dataService.getDistrictData().toPromise();
    this.districts.forEach((v) => {
      if (v.count > 100) {
        this.marker_url = '/assets/images/marker-red.svg';
      } else if (v.count > 35) {
        this.marker_url = '/assets/images/marker-orange.svg';
      } else if (v.count > 15) {
        this.marker_url = '/assets/images/marker-yellow.svg';
      } else {
        this.marker_url = '/assets/images/marker-light-yellow.svg';
      }

      this.di = new Object({
        position: v.location,
        icon: this.marker_url,
        animation: google.maps.Animation.DROP,
        label: {
          text: v.count + '',
          color: '#ffffff',
          fontWeight: 'bold',
          fontSize: '17px',
          fontFamily: "Poppins',sans-serif",
        },
        zIndex: 2000,
        title: v.name,
      });

      if (v.location != null) {
        this.district_infections.push(this.di);
      } else {
        this.other_infections.push(this.di);
      }
      this.other_infections.sort((a, b) => b.count - a.count);
    });
  }

  openInfoWindow(marker: MapMarker, title: any) {
    this.infoWindow.open(marker);
    this.district_name = title;
  }

  addMarker(data) {
    const { lat, lng, id } = data;
    const markerIndex = this.dronePositions.findIndex(
      (marker) => marker && marker.id === id
    );
    if (markerIndex === -1) {
      console.log('data', lat, lng);
      const marker = {
        id,
        position: { lat, lng },
        icon: this.drone_marker_url,
        animation: google.maps.Animation.DROP,
        label: {
          text: 'Drone 1',
          color: '#ffffff',
          fontWeight: 'bold',
          fontSize: '12px',
          fontFamily: "Poppins',sans-serif",
        },
        zIndex: 2001,
        title: 'Drone 1',
      };
      this.dronePositions.push(marker);
    } else {
      console.log('marker index', markerIndex);
      this.dronePositions[markerIndex].position = {
        lat,
        lng,
      };
    }
  }

  /**
   * Removing the drone marker from the google map
   * @param data - socket io data containing socket id of the connection
   */
  removeDroneMarker(data) {
    // Getting socket id from the server
    const { id } = data;
    const markerIndex = this.dronePositions.findIndex(
      (marker) => marker && marker.id === id
    );
    this.dronePositions.splice(markerIndex, 1);
  }

  ngAfterViewInit(): void {
    this.gmap.data.loadGeoJson('/assets/districts.geojson');
    this.gmap.options = { disableDefaultUI: true };
    this.gmap.options = this.mapOptions;
    // var mapOptions = {
    //   mapTypeId: 'roadmap',
    //   styles: this.style
    // };

    this.gmap.data.setStyle({
      strokeWeight: 1,
      strokeColor: 'black',
      fillColor: 'grey',
      fillOpacity: 0.2,
    });

    this.gmap.data.addListener('mouseover', (event) => {
      // console.log(event.feature.j.province_name);
      // console.log(event.feature.getProperty('district_name'));
      this.selectedDistrict.emit([
        event.feature.getProperty('district_name') + ',',
        event.feature.getProperty('province_name') + ' Province',
      ]);
      this.gmap.data.revertStyle();
      this.gmap.data.overrideStyle(event.feature, {
        fillColor: 'red',
        fillOpacity: 0.4,
      });
    });

    this.gmap.data.addListener('mouseout', (event) => {
      // console.log(event.feature.j.province_name);
      // console.log(event.feature.getProperty('district_name'));
      // this.selectedDistrict.emit(event.feature.getProperty('district_name'));
      this.gmap.data.revertStyle();
      // this.gmap.data.overrideStyle(event.feature, {fillOpacity: 0.8});
    });

    this.gmap.data.addListener('click', (event) => {
      console.log(event);

      let bounds = new google.maps.LatLngBounds();
      event.feature.getGeometry().forEachLatLng((latlng) => {
        bounds.extend(latlng);
      });
      this.gmap.fitBounds(bounds);
    });
  }
  // style =

  mapOptions: google.maps.MapOptions = {
    // center: this.coordinates,
    zoom: 8,
    styles: [
      {
        featureType: 'all',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'on',
          },
        ],
      },
      {
        featureType: 'all',
        elementType: 'labels.text.fill',
        stylers: [
          {
            saturation: 36,
          },
          {
            color: '#000000',
          },
          {
            lightness: 40,
          },
        ],
      },
      {
        featureType: 'all',
        elementType: 'labels.text.stroke',
        stylers: [
          {
            visibility: 'on',
          },
          {
            color: '#000000',
          },
          {
            lightness: 16,
          },
        ],
      },
      {
        featureType: 'all',
        elementType: 'labels.icon',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'administrative',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#000000',
          },
          {
            lightness: 20,
          },
        ],
      },
      {
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#000000',
          },
          {
            lightness: 17,
          },
          {
            weight: 1.2,
          },
        ],
      },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#c4c4c4',
          },
        ],
      },
      {
        featureType: 'administrative.neighborhood',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#707070',
          },
        ],
      },
      {
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [
          {
            color: '#000000',
          },
          {
            lightness: 20,
          },
        ],
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [
          {
            color: '#000000',
          },
          {
            lightness: 21,
          },
          {
            visibility: 'on',
          },
        ],
      },
      {
        featureType: 'poi.business',
        elementType: 'geometry',
        stylers: [
          {
            visibility: 'on',
          },
        ],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#be2026',
          },
          {
            lightness: 0,
          },
          {
            visibility: 'on',
          },
        ],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.stroke',
        stylers: [
          {
            visibility: 'off',
          },
          {
            hue: '#ff000a',
          },
        ],
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [
          {
            color: '#000000',
          },
          {
            lightness: 18,
          },
        ],
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#575757',
          },
        ],
      },
      {
        featureType: 'road.arterial',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#ffffff',
          },
        ],
      },
      {
        featureType: 'road.arterial',
        elementType: 'labels.text.stroke',
        stylers: [
          {
            color: '#2c2c2c',
          },
        ],
      },
      {
        featureType: 'road.local',
        elementType: 'geometry',
        stylers: [
          {
            color: '#000000',
          },
          {
            lightness: 16,
          },
        ],
      },
      {
        featureType: 'road.local',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#999999',
          },
        ],
      },
      {
        featureType: 'road.local',
        elementType: 'labels.text.stroke',
        stylers: [
          {
            saturation: -52,
          },
        ],
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [
          {
            color: '#000000',
          },
          {
            lightness: 19,
          },
        ],
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
          {
            color: '#000000',
          },
          {
            lightness: 17,
          },
        ],
      },
    ],
  };

  updateMarkers(s: any) {
    console.log(this.mapType);
    if (s === 'district') {
      this.activeMarkers = this.district_infections;
    }

    if (s === 'pcr') {
      this.activeMarkers = null;
    }

    if (s === 'drones') {
      this.activeMarkers = [{}, {}];
    }
  }
}
