import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { WalletProvider } from '../../providers/wallet/wallet';
import { LoginPage } from '../login/login';

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
  }
  phone = "";
  passwordConfirm ="";

  constructor(public walletService: WalletProvider, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
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
      console.log("theuser")
      this.walletService.postUser(this.userToRegister).then(res=>{
        console.log(res)
        let confirmAlert = this.alertCtrl.create({
          title: 'Registro exitoso',
          subTitle: 'Bienvenid@, por favor inicia sesión para empezar a usar PortaLuca',
          buttons: [{text:'Aceptar',handler:()=>{this.navCtrl.setRoot(LoginPage)}}]
        })
        confirmAlert.present();
      },(e)=>{
        console.log(e)
      }
        
      )
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
