import { Transaction } from './../models';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Currency } from '../models';
import { EXCHANGERATES } from '../mock-accounts';

import 'rxjs/add/operator/map';
@Injectable()
export class TransactionService {

  transaction: Transaction
  constructor(private http: Http) {
  }

  getExchangeRate() {
     return Promise.resolve(EXCHANGERATES)
  }

  postTransaction(transaction: Transaction) {
    const bodyString = JSON.stringify(transaction);
    const headers = new Headers({ 'Content-Type': 'application/json'});
    const options = new RequestOptions({ headers: headers});

    return this.http.post('http://localhost:8080/api/v1/ebank/transaction', bodyString, options)
              .map((res: Response) => res.json());
  }


}
