import { Observable } from 'rxjs/Observable';
import { Transaction, Client } from './../models';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Currency } from '../models';
import { EXCHANGERATES } from '../mock-accounts';

import 'rxjs/add/operator/map';
@Injectable()
export class TransactionService {

  transaction: Transaction;
  auth;
  currentClient: Client;
  private baseUrl = 'http://localhost:8080/api/v1/ebank/transaction';

  constructor(private http: Http) {
    this.currentClient = JSON.parse(localStorage.getItem('currentClient'));
    this.auth = 'Basic ' + btoa(this.currentClient.email + ':' + this.currentClient.password);
  }

  getExchangeRate() {
     return Promise.resolve(EXCHANGERATES)
  }

  postTransaction(transaction: Transaction) {
    const bodyString = JSON.stringify(transaction);
    const headers = new Headers();
    headers.append( 'Content-Type', 'application/json');
    headers.append( 'Authorization', this.auth);
    const options = new RequestOptions({ headers: headers});

    return this.http.post(this.baseUrl , bodyString, options)
          .map((res: Response) => res.json())
          .catch(this.errorHandler);
  }
  getAccountsByClient(id) {
    const headers = new Headers();
    headers.append( 'Content-Type', 'application/json');
    headers.append( 'Authorization', this.auth);
    const options = new RequestOptions({ headers: headers});
    return this.http.post(this.baseUrl + '/' + id , options)
          .map((res: Response) => res.json())
          .catch(this.errorHandler);
  }
  errorHandler(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Server error');
  }

}
