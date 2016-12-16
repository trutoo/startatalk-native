import { Injectable, Inject, NgZone, ElementRef } from '@angular/core';
import { GoogleMapsModule } from '../../../app/frameworks/startatalk/index';
import { MapConfig } from '../../../app/frameworks/startatalk/index';
import { registerElement } from 'nativescript-angular/element-registry';

@Injectable()
export class NSGoogleMapsService {

  private googleMaps: any;

  constructor(
    @Inject(GoogleMapsModule) private googleMapsModule: any,
  ) {
    registerElement('MapView', () => this.googleMaps.MapView);
  }

  create(mapView: ElementRef): Promise<any> {
    return new Promise((resolve: ($event: any) => void) => {
      mapView.nativeElement.addEventListener('mapReady', function handler($event: any) {
        // Instantly remove event listener due to single occurance
        mapView.nativeElement.removeEventListener('mapReady', handler);
        // Loaded google maps sdk
        this.googleMaps = $event.gMap;
        $event.object.setStyle(MapConfig.GOOGLE_MAPS_STYLE);
        resolve($event);
      });
    });
  }
}

function censor(censor) {
  var i = 0;

  return function (key, value) {
    if (i !== 0 && typeof (censor) === 'object' && typeof (value) == 'object' && censor == value)
      return '[Circular]';

    if (i >= 29) // seems to be a harded maximum of 30 serialized objects?
      return '[Unknown]';

    ++i; // so we know we aren't using the original object anymore

    return value;
  };
}
