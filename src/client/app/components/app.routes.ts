// app
import { HomeRoutes } from './home/home.routes';
import { AboutRoutes } from './about/about.routes';
import { MapRoutes } from './map/map.routes';
import { AuthRoutes } from './auth/auth.routes';

export const routes: Array<any> = [
  ...MapRoutes,
  ...HomeRoutes,
  ...AboutRoutes,
  ...AuthRoutes,
];
