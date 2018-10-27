import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes }             from '@angular/router';

import { TabsPage }                         from './tabs.page';
import { HomePage }                         from '../home/home.page';
import { AboutPage }                        from '../about/about.page';
import { ContactPage }                      from '../contact/contact.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      { path: 'home', outlet: 'home', component: HomePage },
      { path: 'about', outlet: 'about', component: AboutPage },
      { path: 'contact', outlet: 'contact', component: ContactPage },
      { path: '', redirectTo: '/tabs/(home:home)', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/tabs/(home:home)', pathMatch: 'full' }
];


@NgModule({
  imports: [ RouterModule.forChild(routes) ],

  exports: [ RouterModule ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class TabsPageRoutingModule {}
