import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams, RequestOptions } from '@angular/http';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import "rxjs/add/operator/map";
import "rxjs/Rx";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";

/*
  Generated class for the WalletProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WalletProvider {
  private options: RequestOptions;
  private headers = new HttpHeaders();
  api_uri_base = "https://Muchuy-2--jesusfchavarro.repl.co/v1/"
  constructor(public http: HttpClient) {
    console.log('Hello WalletProvider Provider');
    this.headers.append('Content-Type', 'application/json');
  }

  public getBalance(UUID){
    return this.http.get(this.api_uri_base+"users/"+UUID+"/balance",{headers:this.headers}).toPromise();
  }

  public postUser(body){
    return this.http.post(this.api_uri_base+"users/",body,{headers:this.headers}).toPromise();
  }

  public postTransactionAsk(body){
    return this.http.post(this.api_uri_base+"transaction/answer",body,{headers:this.headers}).toPromise();
  }

}
