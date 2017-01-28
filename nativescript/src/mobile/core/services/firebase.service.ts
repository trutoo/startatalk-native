import { Injectable, Inject, NgZone } from '@angular/core';
import { FirebaseToken } from '../../../app/shared/startatalk/index';

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
