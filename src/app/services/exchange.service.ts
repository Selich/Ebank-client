import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Client, Account, Currency } from '../models';
import { CLIENTS} from '../mock-accounts';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class ExchangeService {

  exchangeList: Currency[];
  currentClient: Client;
  auth;
  private baseUrl = 'http://localhost:8080/api/v1/ebank/currency';


  constructor(private http: Http) {
    this.currentClient = JSON.parse(localStorage.getItem('currentClient'));
    this.auth = 'Basic ' + btoa(this.currentClient.email + ':' + this.currentClient.password);
  }



  getCurrencies() {
    const headers = new Headers();
    headers.append( 'Content-Type', 'application/json');
    headers.append( 'Authorization', this.auth);
    const options = new RequestOptions({headers: headers});
    return this.http.get(this.baseUrl + '/list', options)
          .map((res: Response) => res.json())
          .catch(this.errorHandler);
  }


  errorHandler(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Server error');
  }



}
