import { BaseComponent, Config } from '../../frameworks/core/index';
import { ElementRef, ViewChild } from '@angular/core';
import { FirebaseService } from '../../frameworks/startatalk/index';

@BaseComponent({
  moduleId: module.id,
  selector: 'sd-auth',
  templateUrl: 'auth.component.html',
  styleUrls: ['auth.component.css'],
  providers: [FirebaseService]
})
export class AuthComponent {

  static TYPE = {
    EMAIL: 0,
    FACEBOOK: 1,
    GOOGLE: 2,
    TWITTER: 3,
  };

  constructor(
    private firebaseService: FirebaseService,
  ) {
  }

  authenticate(type: number) {
    let provider;
    switch (type) {
      case AuthComponent.TYPE.FACEBOOK:
        this.firebaseService.facebookAuth();
    }
  }
}
