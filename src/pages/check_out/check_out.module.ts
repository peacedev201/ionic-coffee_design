import { Check_outPage } from './check_out';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    Check_outPage,
  ],
  imports: [
    IonicPageModule.forChild(Check_outPage),
  ],
  exports: [
    Check_outPage
  ]
})

export class CostaPageModule { }
