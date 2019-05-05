import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { TransferPage } from '../transfer/transfer';

/**
 * Generated class for the QrReaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qr-reader',
  templateUrl: 'qr-reader.html',
})
export class QrReaderPage {

  constructor(private qrScanner: QRScanner,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.qrScanner.prepare().then((status: QRScannerStatus) => {
     if (status.authorized) {
       let scanSub = this.qrScanner.scan().subscribe((text: string) => {
         console.log('Scanned something', text);

         this.qrScanner.hide();
         scanSub.unsubscribe();
         this.navCtrl.getPrevious().data.text = text;
         this.navCtrl.getPrevious().data.disabled = true;
         this.navCtrl.pop();

       });

     } else if (status.denied) {

     } else {

     }
  })
  .catch((e: any) => console.log('Error is', e));
  }

}
