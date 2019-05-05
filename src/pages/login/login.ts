import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs-compat';
import 'rxjs/add/operator/take';
import { RegisterPage } from '../register/register';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user={id:"",
  password:""}

  userLogin={id:"123",
  password:"123"}

  constructor(public loadingCtrl: LoadingController,public afAuth: AngularFireAuth, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  login(){
    let loading = this.loadingCtrl.create({
      content: ''
    });
    loading.present();
    const result = this.afAuth.auth.signInWithEmailAndPassword(this.user.id,this.user.password).then(res=>{
      if(res.user){
        loading.dismiss();
        this.navCtrl.setRoot(DashboardPage)
      }else{
        this.user.password = ""
        loading.dismiss()
        let badLoginAlert = this.alertCtrl.create({
          title: 'Usuario o contraseña incorrectos',
          subTitle: 'Por favor verifica tu email y contraseña e intentalo de nuevo',
          buttons: ['Aceptar']
        })
        badLoginAlert.present();
      }

    },(e)=>{
      console.log(e)
      loading.dismiss()
      this.user.password = ""
      let badLoginAlert = this.alertCtrl.create({
        title: 'Usuario o contraseña incorrectos',
        subTitle: 'Por favor verifica tu email y contraseña e intentalo de nuevo',
        buttons: ['Aceptar']
      })
      badLoginAlert.present();
    })
  }

  gotoRegister(){
    this.navCtrl.push(RegisterPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
