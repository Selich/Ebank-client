import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Account } from './../models';

import { ACCOUNTS } from './../mock-accounts';

import 'rxjs/add/operator/map';
@Injectable()
export class AccountService {

  private baseUrl = 'http://localhost:8080/api/v1/ebank/account';

  constructor(private http: Http) {
  }


  getAccountsByCurrentClient() {
    this.http.get(this.baseUrl + '/current')
        .map(res => res.json());

  }

  getAccountsByClient() {

  }

  getAccounts() {
    return this.http.get('http://localhost:8080/api/v1/user/accounts')
    .map((response: Response) => response.json());
  }

  getFake(): Promise<Account[]>{
    return Promise.resolve(ACCOUNTS);
  }
  getFakeAccount(): Promise<Account[]>{
    return Promise.resolve(ACCOUNTS);
  }



}
