import { Component, ViewChild }  from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { filter, map, tap }           from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IonRouterOutlet } from '@ionic/angular';


interface TabPage {
  href: string;
  icon: string;
  label: string;
  outlet: string;
};


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  @ViewChild('homeOutlet') homeOutlet: IonRouterOutlet;

  tabsList: Array<TabPage> = [
    {
      href: '/tabs/(home:home)',
      icon: 'home',
      label: 'Home',
      outlet: 'home'
    }, {
      href: '/tabs/(about:about)',
      icon: 'information-circle',
      label: 'About',
      outlet: 'about'
    }, {
      href: '/tabs/(contact:contact)',
      icon: 'contacts',
      label: 'Contact',
      outlet: 'contact'
    }
  ];

  public outletTitle: string;

  constructor(private router: Router) {
  }

  handleHeaderActions(event) {
    if (event.name === 'settings') this.router.navigate(['/settings']);
  }

  getOutlet() {
    switch (this.router.url) {
      case this.tabsList[1].href: {
        this.outletTitle = this.tabsList[1].label;
        break;
      }
      case this.tabsList[2].href: {
        this.outletTitle = this.tabsList[2].label;
        break;
      }
      default: {
        this.outletTitle= this.tabsList[0].label;
        break;
      }
    }
  }
}
