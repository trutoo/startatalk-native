import { Injectable, Inject, NgZone } from '@angular/core';
import { FirebaseToken } from '../../../app/frameworks/startatalk/index';

@Injectable()
export class NSFirebaseService {

  constructor(
    @Inject(FirebaseToken) private firebaseToken: any,
  ) {
  }

  create() {
  }

  destroy() {
    // TODO
  }
}
