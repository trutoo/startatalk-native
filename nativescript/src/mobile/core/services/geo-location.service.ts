import { Injectable, Inject, NgZone } from '@angular/core';
import { GeoLocationToken } from '../../../app/shared/startatalk/index';

@Injectable()
export class NSGeoLocationService {

  constructor(
    @Inject(GeoLocationToken) private geoLocationToken: any,
  ) {
  }

  create() {
  }

  destroy() {
    // TODO
  }
}
