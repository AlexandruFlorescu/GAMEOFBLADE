import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {
  private user: firebase.User;

  constructor(public afAuth: AngularFireAuth) {

  		afAuth.authState.subscribe(user => {
  			this.user = user;
  		});
  	}

  	signInWithEmail(credentials) {
    	return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
  			 credentials.password);
  	}
    signUp(credentials) {
	     return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
  }

  getUser(){
    return this.user;
  }

}
