// nativescript
import {
  NativeScriptRouterModule,
  RouterExtensions as TNSRouterExtensions
} from 'nativescript-angular';

// angular
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

// libs
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// app
import {
  WindowService,
  ConsoleService,
  RouterExtensions,
  AppService
} from './app/shared/core/index';
import {
  GeoLocationToken,
  GeoLocationService,
  FirebaseToken,
  FirebaseService,
  GoogleMapsToken,
  GoogleMapsService,
  SVGService
} from './app/shared/startatalk/index';
import { AppComponent } from './app/components/app.component';
import { routes } from './app/components/app.routes';

// feature modules
import { CoreModule } from './app/shared/core/core.module';
import { AppReducer } from './app/shared/ngrx/index';
import { MultilingualEffects } from './app/shared/i18n/index';
import { NameListEffects } from './app/shared/sample/index';
import { ComponentsModule, cons } from './components.module';

// {N} custom app specific
import {
  WindowNative,
  NSAppService,
  NSGeoLocationService,
  NSFirebaseService,
  NSGoogleMapsService
} from './mobile/core/index';
import { NS_ANALYTICS_PROVIDERS } from './mobile/analytics/index';

// nativescript plugins
const GeoLocationPlugin = require('nativescript-geolocation');
const FirebasePlugin = require('nativescript-plugin-firebase');
const GoogleMapsPlugin = require('nativescript-google-maps-sdk');

/**
 * Config
 * Seed provided configuration options
 */
import { Config } from './app/shared/core/index';
import { Page } from 'ui/page';
Config.PageClass = Page;

// (required) platform target (allows component decorators to use the right view template)
Config.PLATFORM_TARGET = Config.PLATFORMS.MOBILE_NATIVE;

// (optional) log level - defaults to no logging if not set
Config.DEBUG.LEVEL_4 = true;

// (optional) custom i18n language support
// example of how you can configure your own language sets
// you can use the AppConfig class or build something similar into your own framework
import { AppConfig } from './app/shared/sample/services/app-config';
import { MultilingualService } from './app/shared/i18n/services/multilingual.service';
MultilingualService.SUPPORTED_LANGUAGES = AppConfig.SUPPORTED_LANGUAGES;

@NgModule({
  imports: [
    CoreModule.forRoot([
      { provide: WindowService, useClass: WindowNative },
      { provide: ConsoleService, useFactory: (cons) },
    ]),
    ComponentsModule,
    NativeScriptRouterModule.forRoot(<any>routes),
    StoreModule.provideStore(AppReducer),
    EffectsModule.run(MultilingualEffects),
    EffectsModule.run(NameListEffects)
  ],
  providers: [
    NS_ANALYTICS_PROVIDERS,
    { provide: RouterExtensions, useClass: TNSRouterExtensions },
    { provide: AppService, useClass: NSAppService },
    { provide: GeoLocationToken, useFactory: () => { return GeoLocationPlugin; } },
    { provide: GeoLocationService, useClass: NSGeoLocationService },
    { provide: FirebaseToken, useFactory: () => { return FirebasePlugin; } },
    { provide: FirebaseService, useClass: NSFirebaseService },
    { provide: GoogleMapsToken, useFactory: () => { return GoogleMapsPlugin; } },
    { provide: GoogleMapsService, useClass: NSGoogleMapsService },
    { provide: SVGService, useClass: SVGService },
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class NativeModule { }
