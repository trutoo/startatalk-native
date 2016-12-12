import { Injectable, Inject, NgZone } from '@angular/core';
import { GoogleMaps } from '../../../app/frameworks/startatalk/index';
import { WindowService } from '../../../app/frameworks/core/services/window.service';

@Injectable()
export class NSGoogleMapsService {

  constructor(
    @Inject(GoogleMaps) private googleMaps: any,
  ) {

  }

  create(selector: string) {

  }
}
