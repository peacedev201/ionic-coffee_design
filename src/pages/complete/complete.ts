import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {LoginPage} from '../login/login';

@IonicPage()
@Component({
  selector: 'page-complete',
  templateUrl: 'complete.html'
})
export class CompletePage {

  drawerOptions: any;
  constructor(public navCtrl: NavController) {
    this.drawerOptions = {
      handleHeight: 50,
      thresholdFromBottom: 200,
      thresholdFromTop: 200,
      bounceBack: true
    };
  }
  goLoginPage(){
    this.navCtrl.push(LoginPage);
  }
}
