import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AddUser } from '../add-user/add-user';
/**
 * Generated class for the GameSetupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game-setup',
  templateUrl: 'game-setup.html',
})
export class GameSetupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameSetupPage');
  }

  openModal(){
    alert(9);
   let userModal = this.modalCtrl.create(AddUser, { userId: 8675309 });
   userModal.present();
 }

}
