import { BaseComponent, Config } from '../../frameworks/core/index';
//import { ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { GoogleMapsService } from '../../frameworks/startatalk/services/google-maps.service';

@BaseComponent({
    moduleId: module.id,
    selector: 'sd-map',
    templateUrl: 'map.component.html',
    styleUrls: ['map.component.css'],
    providers: [GoogleMapsService]
})
export class MapComponent {

    //@ViewChild('MapView') mapView: ElementRef;

    constructor(
        private googleMaps: GoogleMapsService
    ) {
        if (Config.IS_WEB()) {
            googleMaps.create();
        } else if (Config.IS_MOBILE_NATIVE()) {
            //const registerElement = require('nativescript-angular/element-registry');
            //registerElement('MapView', () => require('nativescript-google-maps-sdk').MapView);
            googleMaps.create();
        }
    }

    ngAfterViewInit() {
        //console.log(this.mapView);
    }

    onMapReady($event) {

    }

}
