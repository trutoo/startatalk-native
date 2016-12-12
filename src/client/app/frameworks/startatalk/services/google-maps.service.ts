import { Injectable, Inject, NgZone } from '@angular/core';
import { GoogleMaps } from '../index';
import { AppConfig } from '../app-config';

@Injectable()
export class GoogleMapsService {

  private map: any;

  constructor(
    @Inject(GoogleMaps) private googleMaps: any,
  ) {
    googleMaps.KEY = AppConfig.GOOGLE_MAPS_API_KEY;
    googleMaps.LIBRARIES = AppConfig.GOOGLE_MAPS_LIBRARIES;
  }

  create() {

  }

  destroy() {
    // TODO
  }
}
