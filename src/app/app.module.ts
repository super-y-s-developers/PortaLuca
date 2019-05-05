import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { QrReaderPage } from '../pages/qr-reader/qr-reader';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { StaticsPage } from '../pages/statics/statics';
import { TransferPage } from '../pages/transfer/transfer';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../config';
import { AngularFireAuth } from 'angularfire2/auth';
import { WalletProvider } from '../providers/wallet/wallet';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireStorageModule} from 'angularfire2/storage'
import { QRScanner } from '@ionic-native/qr-scanner';


@NgModule({
  declarations: [
    MyApp,
    DashboardPage,
    LoginPage,
    RegisterPage,
    StaticsPage,
    TransferPage,
    QrReaderPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig.fire),
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardPage,
    LoginPage,
    RegisterPage,
    StaticsPage,
    TransferPage,
    QrReaderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    WalletProvider,
    QRScanner
  ]
})
export class AppModule {}
