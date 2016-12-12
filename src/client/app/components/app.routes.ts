// app
import { HomeRoutes } from './home/home.routes';
import { AboutRoutes } from './about/about.routes';
import { MapRoutes } from './map/map.routes';

export const routes: Array<any> = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...MapRoutes,
];
