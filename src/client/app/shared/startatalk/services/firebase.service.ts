import { Injectable, Inject, NgZone } from '@angular/core';
import { FirebaseToken } from './index';
import { FirebaseConfig } from '../utils/index';

@Injectable()
export class FirebaseService {

  private database: any;
  private user: any;

  constructor(
    @Inject(FirebaseToken) private firebase: any,
  ) {
    this.firebase.initializeApp({
      apiKey: FirebaseConfig.FIREBASE_API_KEY,
      authDomain: FirebaseConfig.FIREBASE_AUTH_DOMAIN,
      databaseURL: FirebaseConfig.FIREBASE_DATABASE_URL,
      storageBucket: FirebaseConfig.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: FirebaseConfig.FIREBASE_MESSAGING_SENDER_ID,
    });

    this.database = this.firebase.database();
    this.firebase.auth().getRedirectResult().then(this.success).catch(this.error);

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        this.user = user;
      } else {
        this.user = {};
      }
    });
  }

  facebookAuth() {
    const provider = new this.firebase.auth.FacebookAuthProvider();
    provider.addScope('email');
    this.firebase.auth().signInWithRedirect(provider);
  }

  googleAuth() {
    const provider = new this.firebase.auth.GoogleAuthProvider();
    this.firebase.auth().signInWithRedirect(provider);
  }

  success(result) {
    console.log(result);
  }

  error(error) {
    console.log(error);
  }

  destroy() {
    // TODO
  }
}
