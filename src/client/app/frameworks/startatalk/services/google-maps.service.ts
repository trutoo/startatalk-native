import { Injectable, Inject, NgZone, ElementRef } from '@angular/core';
import { GoogleMapsModule } from './index';
import { MapConfig } from '../utils/index';

@Injectable()
export class GoogleMapsService {

  private googleMaps: any;

  constructor(
    @Inject(GoogleMapsModule) private googleMapsModule: any,
  ) {
    this.googleMapsModule.key = MapConfig.GOOGLE_MAPS_API_KEY;
    this.googleMapsModule.libraries = MapConfig.GOOGLE_MAPS_LIBRARIES;
  }

  create(mapView: ElementRef): Promise<any> {
    return new Promise((resolve: ($event: any) => void) => {
      this.googleMapsModule.load().then((google: any) => {
        // Loaded google maps sdk
        this.googleMaps = google.maps;
        const map = new this.googleMaps.Map(mapView.nativeElement, {
          center: { lat: 59.334591, lng: 18.063240 },
          zoom: 17,
          styles: MapConfig.GOOGLE_MAPS_STYLE,
        });
        // Match nativescript event
        resolve({ eventName: 'mapReady', object: map, gMap: this.googleMaps });
      });
    });
  }

  destroy() {
    // TODO
  }
}
