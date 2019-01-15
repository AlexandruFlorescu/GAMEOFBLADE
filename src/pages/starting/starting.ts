import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameSetupPage } from '../game-setup/game-setup';
import { HowToPage } from '../how-to/how-to';
import { LoginPage } from '../login/login';
/**
 * Generated class for the StartingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-starting',
  templateUrl: 'starting.html',
})
export class StartingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartingPage');
  }
  onClick() {
    this.navCtrl.push(GameSetupPage);
    }
  openHowTo(){
    this.navCtrl.push(HowToPage);
  }
  openLogin(){
    this.navCtrl.push(LoginPage);
  }
}
