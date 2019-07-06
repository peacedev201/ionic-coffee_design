import { CostaPage } from './costa';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    CostaPage,
  ],
  imports: [
    IonicPageModule.forChild(CostaPage),
  ],
  exports: [
    CostaPage
  ]
})

export class CostaPageModule { }
