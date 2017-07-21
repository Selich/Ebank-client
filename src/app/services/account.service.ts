import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Account } from './../models';

import { ACCOUNTS } from './../mock-accounts';

import 'rxjs/add/operator/map';
@Injectable()
export class AccountService{

  constructor(private http: Http) {
  }



  getAccount(id: number) {
    return this.http.get("3")
    .map((response:Response) => response.json());
  }

  getFake(): Promise<Account[]> {
    return Promise.resolve(ACCOUNTS);
  }



}
