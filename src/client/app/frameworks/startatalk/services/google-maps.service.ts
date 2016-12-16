import { Injectable, Inject, NgZone, ElementRef } from '@angular/core';
import { GoogleMapsModule } from '../index';
import { MapConfig } from '../index';

@Injectable()
export class GoogleMapsService {

  private googleMaps: any;

  constructor(
    @Inject(GoogleMapsModule) private googleMapsModule: any,
  ) {
    this.googleMapsModule.KEY = MapConfig.GOOGLE_MAPS_API_KEY;
    this.googleMapsModule.LIBRARIES = MapConfig.GOOGLE_MAPS_LIBRARIES;
  }

  create(mapView: ElementRef): Promise<any> {
    console.log(this.googleMapsModule);
    return new Promise((resolve: ($event: any) => void) => {
      this.googleMapsModule.load((google: any) => {
        // Loaded google maps sdk
        this.googleMaps = google.maps;
        const map = new this.googleMaps.Map(mapView.nativeElement, {
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
