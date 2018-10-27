import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule }                     from '@angular/common'

import { IonicModule }                      from '@ionic/angular';

import { AppHeaderComponent }               from './app-header/app-header.component'


@NgModule({
    declarations: [ AppHeaderComponent ],

    imports: [ IonicModule, CommonModule ],

    exports: [ AppHeaderComponent ],

    entryComponents: [ AppHeaderComponent],

    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule {}