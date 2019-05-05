import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetMoneyPage } from './get-money';

@NgModule({
  declarations: [
    GetMoneyPage,
  ],
  imports: [
    IonicPageModule.forChild(GetMoneyPage),
  ],
})
export class GetMoneyPageModule {}
