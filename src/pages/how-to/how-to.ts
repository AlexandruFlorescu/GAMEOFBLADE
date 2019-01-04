import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SaveProgressPage } from '../save-progress/save-progress';
import { Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';
/**
 * Generated class for the HowToPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-how-to',
  templateUrl: 'how-to.html',
})
export class HowToPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  @ViewChild(Slides) slides: Slides;

  ionViewDidLoad() {
    console.log('ionViewDidLoad HowToPage');
  }

  skipSlides(){
    this.navCtrl.push(SaveProgressPage)
  }

  nextSlide(){
    if(this.slides.getActiveIndex() == 3)
      this.skipSlides();
    else
      this.slides.slideTo(this.slides.getActiveIndex()+1, 500);
  }
}
