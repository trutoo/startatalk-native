import { Component } from '@angular/core';
import { Config } from '../../shared/core/index';
import { ElementRef, ViewChild } from '@angular/core';
import { FirebaseService } from '../../shared/startatalk/index';

@Component({
  moduleId: module.id,
  selector: 'sd-auth',
  templateUrl: 'auth.component.html',
  styleUrls: ['auth.component.css']
})
export class AuthComponent {

  static TYPE = {
    EMAIL: 'email',
    FACEBOOK: 'facebook',
    GOOGLE: 'google',
    TWITTER: 'twitter',
  };

  constructor(
    private firebaseService: FirebaseService,
  ) {
  }

  authenticate(type: string) {
    let provider;
    switch (type) {
      case AuthComponent.TYPE.FACEBOOK:
        this.firebaseService.facebookAuth();
        break;
      case AuthComponent.TYPE.GOOGLE:
        this.firebaseService.googleAuth();
        break;
    }
  }
}
