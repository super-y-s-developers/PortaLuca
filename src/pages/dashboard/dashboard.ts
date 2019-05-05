import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import { TransferPage } from '../transfer/transfer';
import { WalletProvider } from '../../providers/wallet/wallet';
import { AngularFireDatabase } from 'angularfire2/database';

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
  notifications = {};
  canChange;
  notificationsLength;
  currentNotification;
  constructor(public afDatabase: AngularFireDatabase, public loadingCtrl: LoadingController,public walletProvider: WalletProvider, public alertCtrl: AlertController, public afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
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

  showNotification(){
    console.log("si")
    if(this.canChange){
      //@ts-ignore
      if(this.currentNotification.type === "PAYMENT"){
        let alert = this.alertCtrl.create({
          //@ts-ignore
          title: this.currentNotification.data.sourceData.name+' te ha enviado '+ this.currentNotification.data.lucaAmount + "Lukas",
          subTitle: '¿Deseas aceptar la transacción?',
          buttons: ['Aceptar','Cancelar']
        })
        alert.present();
      }
      //@ts-ignore
      if(this.currentNotification.type === "RESPONSE"){
        if(this.currentNotification.data.answer){
          let alert = this.alertCtrl.create({
            //@ts-ignore
            title: this.currentNotification.data.targetData.name+" aceptó la transacción :D",
            buttons: ['Aceptar']
          })
          alert.present();
        }else{
          let alert = this.alertCtrl.create({
            //@ts-ignore
            title: this.currentNotification.data.targetData.name+" rechazó la transacción :(",
            buttons: ['Aceptar']
          })
          alert.present();
        }

        
      }


    }
  }
  
  ionViewDidLoad() {
    this.notifications = {}
    this.currentNotification = {}
    this.canChange = false;
    let loading = this.loadingCtrl.create({
      content: ''
    });
    loading.present();
    this.afAuth.user.subscribe(res =>{
      if(res && res.uid){
        var UUID = res.uid;
        this.walletProvider.getBalance(UUID).then(res2=>{
          console.log(res2)
          this.money = res2;
          this.afDatabase.list(`user/${UUID}`).snapshotChanges().subscribe(data=>{
            try{
              this.notifications = data.filter(res => res.key === 'notifications')[0].payload.val();
            }catch{
              this.notifications = {}
            }
            loading.dismiss();
            setTimeout(x=>{

              console.log(this.notifications[Object.keys(this.notifications)[Object.keys(this.notifications).length - 1]])
              this.notificationsLength = Object.keys(this.notifications).length
              this.currentNotification = this.notifications[Object.keys(this.notifications)[Object.keys(this.notifications).length - 1]]
              this.showNotification()
              setTimeout(x=>{
                this.canChange = true;
              },500)
              
            },500)
          })
        })
      }

    })
    console.log('ionViewDidLoad DashboardPage');
  }

}
