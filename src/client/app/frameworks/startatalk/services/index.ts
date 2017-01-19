import { OpaqueToken } from '@angular/core';

// Lazy loaded modules, don't add to PROVIDERS
export const FirebaseToken: OpaqueToken = new OpaqueToken('firebase');
export const GoogleMapsToken: OpaqueToken = new OpaqueToken('google-maps');

export const STARTATALK_PROVIDERS: any[] = [
];

// services
export * from './firebase.service';
export * from './google-maps.service';
export * from './svg.service';
