import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Currency } from '../models';
import { EXCHANGERATES } from '../mock-accounts';

import 'rxjs/add/operator/map';
@Injectable()
export class TransactionService {

  constructor(private http: Http) {
  }

  getExchangeRate() {
     return Promise.resolve(EXCHANGERATES)
  }

  



}
