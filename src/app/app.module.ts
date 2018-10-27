import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule }                    from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy }  from '@ionic/angular';
import { SplashScreen }                     from '@ionic-native/splash-screen/ngx';
import { StatusBar }                        from '@ionic-native/status-bar/ngx';

import { AppRoutingModule }                 from './app-routing.module';
import { AppComponent }                     from './app.component';
import { ComponentsModule }                 from './components/components.module';


@NgModule({
  declarations: [ AppComponent ],

  entryComponents: [],

  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    RouterModule,
    ComponentsModule
  ],

  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [ AppComponent ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
