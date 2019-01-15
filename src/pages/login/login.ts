import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameSetupPage } from './../game-setup/game-setup';
import { RegisterPage } from './../register/register';
import { AuthenticationProvider } from '../../providers/authentication/authentication';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

    registerCredentials = { email: '', password: '' };


  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthenticationProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  validateData(){
    return true;
  }

  login() {

    console.log('this');
		this.auth.signInWithEmail(this.registerCredentials)
			.then(
				() => this.navCtrl.push(GameSetupPage),
				error => this.loginError = error.message
			);
      console.log('that');
	}

  createAccount(){
    this.navCtrl.push(RegisterPage);
  }

}
