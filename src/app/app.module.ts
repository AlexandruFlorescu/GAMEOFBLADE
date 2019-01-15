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
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from './firebaseConfig';
import { AuthenticationProvider } from '../providers/authentication/authentication';
import { AngularFireAuth } from 'angularfire2/auth';


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
    SaveProgressPage,
    LoginPage,
    RegisterPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig.firebase),

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
    SaveProgressPage,
    LoginPage,
    RegisterPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthenticationProvider,
    AngularFireAuth
  ]
})
export class AppModule {}
