import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { WalletProvider } from '../../providers/wallet/wallet';
import { AngularFireAuth } from 'angularfire2/auth';
import QRCode from 'qrcode';
import { QrReaderPage } from '../qr-reader/qr-reader';

/**
 * Generated class for the TransferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transfer',
  templateUrl: 'transfer.html',
})
export class TransferPage {
  type;
  money;
  notifications = {};
  canChange;
  notificationsLength;
  currentNotification = {}
  wallet;
  currentWallet;
  generated = null;
  constructor(public afDatabase: AngularFireDatabase, public loadingCtrl: LoadingController,public walletProvider: WalletProvider, public alertCtrl: AlertController, public afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }
  
  showNotification(){
    console.log("si")
    if(this.canChange){
      let alert = this.alertCtrl.create({
        //@ts-ignore
        title: this.currentNotification.data.sourceData.name+' te ha enviado '+ this.currentNotification.data.lucaAmount + "Lukas",
        subTitle: '¿Deseas aceptar la transacción?',
        buttons: ['Aceptar','Cancelar']
      })
      alert.present();
    }
  }

  gotoQrPage(){
    this.navCtrl.push(QrReaderPage)
  }
  ionViewDidLoad() {
    this.notifications = {}
    this.currentNotification = {}
    this.canChange = false;
    this.type="id";
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
              this.wallet = data.filter(res=> res.key === 'wallets')[0].payload.val();
            }catch{
              this.notifications = {}
              this.wallet = data.filter(res=> res.key === 'wallets')[0].payload.val();
            }
            loading.dismiss();
            setTimeout(x=>{
              console.log(this.wallet)
              this.currentWallet = this.wallet[0]
              const qrcode = QRCode;
              const self = this
              qrcode.toDataURL(self.currentWallet, { errorCorrectionLevel: 'H' }, function (err, url) {
                self.generated = url;
              })
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
