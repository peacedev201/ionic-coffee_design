import { CompletePage } from './complete';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    CompletePage,
  ],
  imports: [
    IonicPageModule.forChild(CompletePage),
  ],
  exports: [
    CompletePage
  ]
})

export class CompletePageModule { }
