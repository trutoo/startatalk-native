import { OpaqueToken } from '@angular/core';

export const GoogleMaps: OpaqueToken = new OpaqueToken('google-maps');

// services
export * from './services/google-maps.service';
