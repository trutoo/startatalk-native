import { Injectable, Inject, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { GeoLocationToken } from './index';

@Injectable()
export class GeoLocationService {

  private _watcher: any;
  private _position: BehaviorSubject<any> = new BehaviorSubject(null);

  public position: Observable<any> = this._position.asObservable();

  constructor(
    @Inject(GeoLocationToken) private geoLocation: any,
  ) {
    if (geoLocation) {
      this._watcher = this.geoLocation.watchPosition(this.success.bind(this), this.error.bind(this), {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000
      });
    }
  }

  success(position) {
    this._position.next(position);
  }

  error() {
    console.log("Position not available.");
  }

  destroy() {
    // TODO
  }
}
