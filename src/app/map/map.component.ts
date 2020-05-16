import { Component, OnInit, ViewChild, AfterViewInit, EventEmitter, Output, Input } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import * as MarkerClusterer from '@google/markerclustererplus';
import { Hospital } from '../hospitals/hospital';
import { DataService } from '../data.service';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {



    @ViewChild(GoogleMap) gmap: GoogleMap;
    @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;

    center: Object = { lat: 7.669722 + 0.2, lng: 80.645556 + 0.5 };
    nalanda_gedige: any;
    zoom: number;
    districts: any;
    single_district: any = [];

    @Output() selectedDistrict = new EventEmitter<any[]>();

    _hospitals: Hospital[];
    get hospitals(): Hospital[] { return this._hospitals; }
    @Input('hospitals')
    set hospitals(value: Hospital[]) {
        this._hospitals = value;
    }


    hospitalMarkerOptions: google.maps.MarkerOptions;
    constructor(private dataService: DataService) { }




    label_options: any;
    district_infections = [];
    other_infections = [];

    di: Object;
    marker_url: any;
    district_name: any;

    async getDistrictData() {
        this.districts = await this.dataService.getDistrictData().toPromise();
        this.districts.forEach(v => {

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
                marker_options: {
                    icon: this.marker_url,
                    animation: google.maps.Animation.DROP
                },
                label_options: {
                    text: v.count + '',
                    color: '#ffffff',
                    fontWeight: 'bold',
                    fontSize: '17px',
                    fontFamily: "Poppins',sans-serif"
                },
                infowindow_options: {
                    content: v.name
                },
                location: v.location,
                title: v.name,
                count: v.count
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


    ngOnInit(): void {
        // this.nalanda_gedige ={ lat: 7.669722, lng: 80.645556 };
        this.nalanda_gedige = { lat: 7.669722 + 0.2, lng: 80.645556 + 0.5 };
        // this.center = { lat: 7.8774222, lng: 80.7003428 };
        this.center = this.nalanda_gedige;
        this.zoom = 7;

        this.hospitalMarkerOptions = {
            icon: "/assets/hospital-marker.png",
        };

        this.getDistrictData();
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
            fillOpacity: 0.2
        });

        this.gmap.data.addListener('mouseover', (event) => {
            // console.log(event.feature.j.province_name);
            // console.log(event.feature.getProperty('district_name'));
            this.selectedDistrict.emit([event.feature.getProperty('district_name') + ",", event.feature.getProperty('province_name') + " Province"]);
            this.gmap.data.revertStyle();
            this.gmap.data.overrideStyle(event.feature, { fillColor: 'red', fillOpacity: 0.4 });
        });

        this.gmap.data.addListener('mouseout', (event) => {
            // console.log(event.feature.j.province_name);
            // console.log(event.feature.getProperty('district_name'));
            // this.selectedDistrict.emit(event.feature.getProperty('district_name'));
            this.gmap.data.revertStyle();
            // this.gmap.data.overrideStyle(event.feature, {fillOpacity: 0.8});
        });


        this.gmap.data.addListener('click', event => {
            console.log(event);

            let bounds = new google.maps.LatLngBounds();
            event.feature.getGeometry().forEachLatLng(latlng => {
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
                "featureType": "all",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#c4c4c4"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#707070"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 21
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#be2026"
                    },
                    {
                        "lightness": 0
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    },
                    {
                        "hue": "#ff000a"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#575757"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#2c2c2c"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#999999"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "saturation": -52
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    }
                ]
            }
        ]
    };

}
