import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  userToRegister={
    email: "",
    password: "",
    cc: "",
    name: "",
    phone:""
  }

  passwordConfirm ="";

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  signUp(){
    if(this.userToRegister.password !== this.passwordConfirm){
      this.passwordConfirm = "";
      let passwordMatchAlert = this.alertCtrl.create({
        title: 'Las contraseñas no coinciden',
        subTitle: 'Por favor verifique la contraseña y su confirmación',
        buttons: ['Aceptar']
      })
      passwordMatchAlert.present();
    }else{
      console.log("se ha registrado")
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
