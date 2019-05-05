import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import { TransferPage } from '../transfer/transfer';
import { WalletProvider } from '../../providers/wallet/wallet';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  money;
  constructor(public loadingCtrl: LoadingController,public walletProvider: WalletProvider, public alertCtrl: AlertController, public afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }
  logout(){
    this.afAuth.auth.signOut().then(res=>{
      this.navCtrl.setRoot(LoginPage)
    },(e)=>{
      let badRequest = this.alertCtrl.create({
        title: 'Ha ocurrido un error',
        subTitle: 'Ha ocurrido un error inesperado, por favor intentalo de nuevo en unos instantes :(',
        buttons: ['Aceptar']
      })
      badRequest.present();
    })
  }

  gotoTransfer(){
    this.navCtrl.push(TransferPage)
  }
  
  ionViewDidLoad() {
    let loading = this.loadingCtrl.create({
      content: ''
    });
    loading.present();
    this.afAuth.user.subscribe(res =>{
      if(res && res.uid){
        var UUID = res.uid;
        this.walletProvider.getBalance(UUID).then(res2=>{
          console.log(res2)
          loading.dismiss()
          this.money = res2;
        })
      }

    })
    console.log('ionViewDidLoad DashboardPage');
  }

}
