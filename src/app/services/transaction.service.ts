import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Currency } from '../models';
import { EXCHANGERATES } from '../mock-accounts';

import 'rxjs/add/operator/map';
@Injectable()
export class TransactionService {

  constructor(private http: Http) {
  }



  getClients() {
    return this.http.get("http://localhost:8080/api/v1/ebank/client/list")
      .map((response: Response) => response.json());
  }
  // getFake(): Promise<TRANSACTION[]> {
  //   return Promise.resolve(CLIENTS);
  // }

  getExchangeRate(){
     return Promise.resolve(EXCHANGERATES)
 }


}
