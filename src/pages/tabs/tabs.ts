import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { StartingPage } from '../starting/starting';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = StartingPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
