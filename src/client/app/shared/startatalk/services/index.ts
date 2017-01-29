import { OpaqueToken } from '@angular/core';

// Lazy loaded modules, don't add to PROVIDERS
export const GeoLocationToken: OpaqueToken = new OpaqueToken('geo-location');
export const FirebaseToken: OpaqueToken = new OpaqueToken('firebase');
export const GoogleMapsToken: OpaqueToken = new OpaqueToken('google-maps');

export const STARTATALK_PROVIDERS: any[] = [
];

// services
export * from './geo-location.service';
export * from './firebase.service';
export * from './google-maps.service';
export * from './svg.service';
