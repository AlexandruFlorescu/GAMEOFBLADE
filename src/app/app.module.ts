import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import { StartingPage } from '../pages/starting/starting';
import { GameSetupPage } from '../pages/game-setup/game-setup';
import { SaveProgressPage } from '../pages/save-progress/save-progress';

import { AddUserPage } from '../pages/add-user/add-user';
import { HowToPage } from '../pages/how-to/how-to';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    StartingPage,
    GameSetupPage,
    AddUserPage,
    HowToPage,
    SaveProgressPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    StartingPage,
    GameSetupPage,
    AddUserPage,
    HowToPage,
    SaveProgressPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
