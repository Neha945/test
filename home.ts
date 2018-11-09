import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('username') uname;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }
  Login() {
    if (this.uname.value == "admin" && this.password.value == "admin"){
      let alert = this.alertCtrl.create({
        title: 'login successfull',
        subTitle: 'You are logged in',
        buttons: ['OK']
      });
    alert.present();
  }
}
}