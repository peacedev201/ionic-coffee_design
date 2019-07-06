import { Component ,ViewChild} from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Nav, Platform, MenuController } from 'ionic-angular';
import {CostaPage} from '../costapage/costa'
import {ProfilePage} from '../profile/profile'
import {OrderPage} from '../order/order'
import {ContactPage} from '../contact/contact'
import {LogoutPage} from '../logout/logout'
import { Subject } from 'rxjs/Subject';
import { GlobalProvider } from '../../providers/global/global';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  CostaPage:CostaPage;
  ProfilePage:ProfilePage;
  OrderPage:OrderPage;
  ContactPage:ContactPage;
  LogoutPage:LogoutPage;

  drawerOptions: any;
  constructor(
    public gs:GlobalProvider,
    public platform: Platform,
    public navCtrl: NavController,
    public menuCtrl: MenuController
    ) {
    this.drawerOptions = {
      handleHeight: 50,
      thresholdFromBottom: 200,
      thresholdFromTop: 200,
      bounceBack: true
    };
  }
  goCostaPage(){
    this.navCtrl.push(CostaPage);
  }
  goProfilePage(){
    this.navCtrl.push(ProfilePage);
  }
  goOrderPage(){
    this.navCtrl.push(OrderPage);
  }
  goContactPage(){
    this.navCtrl.push(ContactPage);
  }
  goLogoutPage(){
    this.navCtrl.push(LogoutPage);
  }
}
