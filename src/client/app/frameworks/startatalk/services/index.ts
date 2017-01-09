import { OpaqueToken } from '@angular/core';

// Lazy loaded modules, don't add to PROVIDERS
export const GoogleMapsModule: OpaqueToken = new OpaqueToken('google-maps');

export const STARTATALK_PROVIDERS: any[] = [
];

// services
export * from './google-maps.service';
export * from './svg.service';
