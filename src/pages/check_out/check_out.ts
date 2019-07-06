import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {CompletePage} from '../complete/complete'

@IonicPage()
@Component({
  selector: 'page-check_out',
  templateUrl: 'check_out.html'
})
export class Check_outPage {

  drawerOptions: any;
  constructor(public navCtrl: NavController) {
    this.drawerOptions = {
      handleHeight: 50,
      thresholdFromBottom: 200,
      thresholdFromTop: 200,
      bounceBack: true
    };
  }
  goCompletePage(){
    this.navCtrl.push(CompletePage);
  }
}
