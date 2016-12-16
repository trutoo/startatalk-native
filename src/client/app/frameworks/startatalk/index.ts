import { OpaqueToken } from '@angular/core';

export const GoogleMapsModule: OpaqueToken = new OpaqueToken('google-maps');

// services
export * from './services/google-maps.service';

// utils
export * from './utils/app-config';
export * from './utils/map-config';
