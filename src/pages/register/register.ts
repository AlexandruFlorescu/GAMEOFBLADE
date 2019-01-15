import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameSetupPage } from './../game-setup/game-setup';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { LoginPage } from './../login/login';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  registerCredentials = { email: '', password: '' };

    constructor(private navCtrl: NavController, private auth: AuthenticationProvider) { }


    validateData(){
      return true;
    }
    register() {

    		this.auth.signUp(this.registerCredentials).then(
    			() => this.navCtrl.push(GameSetupPage),
    			error => this.signupError = error.message
    		);

      }

    goToLogin(){
      this.navCtrl.push(LoginPage);
    }
}
