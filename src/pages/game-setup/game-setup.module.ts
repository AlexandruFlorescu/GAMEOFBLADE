import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameSetupPage } from './game-setup';

@NgModule({
  declarations: [
    GameSetupPage,
  ],
  imports: [
    IonicPageModule.forChild(GameSetupPage),
  ],
})
export class GameSetupPageModule {}
