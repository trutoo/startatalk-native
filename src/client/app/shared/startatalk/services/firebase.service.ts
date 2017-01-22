import { Injectable, Inject, NgZone } from '@angular/core';
import { FirebaseToken } from './index';

@Injectable()
export class FirebaseService {

  constructor(
    @Inject(FirebaseToken) private firebase: any,
  ) {
  }

  facebookAuth() {
    const provider = new this.firebase.auth.FacebookAuthProvider();
    console.log(provider);
  }

  destroy() {
    // TODO
  }
}
