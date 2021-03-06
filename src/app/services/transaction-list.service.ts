import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Transaction } from '../models';
import { TRANSACTIONS } from '../mock-accounts';

import 'rxjs/add/operator/map';
@Injectable()
export class TransactionListService {

  constructor(private http: Http) {
  }



  getClients() {
    return this.http.get("http://localhost:8080/api/v1/ebank/client/list")
      .map((response: Response) => response.json());
  }
  getFake(): Promise<Transaction[]> {
    return Promise.resolve(TRANSACTIONS);
  }


}
