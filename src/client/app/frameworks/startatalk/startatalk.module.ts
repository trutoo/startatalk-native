// angular
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// app
import { STARTATALK_COMPONENTS } from './components/index';
import { STARTATALK_PROVIDERS } from './services/index';
import { MultilingualModule } from '../i18n/multilingual.module';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule,
    MultilingualModule,
  ],
  declarations: [
    STARTATALK_COMPONENTS
  ],
  providers: [
    STARTATALK_PROVIDERS
  ],
  exports: [
    STARTATALK_COMPONENTS,
    MultilingualModule
  ]
})
export class StartatalkModule {

  constructor( @Optional() @SkipSelf() parentModule: StartatalkModule) {
    if (parentModule) {
      throw new Error('SampleModule already loaded; Import in root module only.');
    }
  }
}
