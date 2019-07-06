import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {Check_outPage} from '../check_out/check_out'

@IonicPage()
@Component({
  selector: 'page-costa',
  templateUrl: 'costa.html'
})
export class CostaPage {

  drawerOptions: any;
  constructor(public navCtrl: NavController) {
    this.drawerOptions = {
      handleHeight: 50,
      thresholdFromBottom: 200,
      thresholdFromTop: 200,
      bounceBack: true
    };
  }
  goCheck_outPage(){
    this.navCtrl.push(Check_outPage);
  }
}
