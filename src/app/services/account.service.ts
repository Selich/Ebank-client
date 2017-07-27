import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Client, Account } from '../models';
import { CLIENTS} from '../mock-accounts';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class AccountService {

  clients: Client[];
  accounts: Account[];
  account: Account;
  private baseUrl = 'http://localhost:8080/api/v1/ebank/account';


  constructor(private http: Http) {
  }



  getAccountsById(id) {
    const headers = new Headers();
    headers.append( 'Content-Type', 'application/json');
    headers.append( 'Authorization', 'Basic dGVzdHVzZXI6dGVzdHBhc3M=');
    const options = new RequestOptions({headers: headers});
    return this.http.get(this.baseUrl + '/' + id, options)
          .map((res: Response) => res.json())
          .catch(this.errorHandler);
  }

  errorHandler(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Server error');
  }

  postAccount(id, account) {
    // const username = 'testuser';
    // const password = 'testpass';
    const bodyString = JSON.stringify(account);
    const headers = new Headers();
    headers.append( 'Content-Type', 'application/json');
    headers.append( 'Authorization', 'Basic dGVzdHVzZXI6dGVzdHBhc3M=');
    const options = new RequestOptions({headers: headers});

    console.log(account);

    return this.http.post(this.baseUrl + '/' + id, bodyString, options)
          .map((res: Response) => res.json())
          .catch(this.errorHandler);
  }

}
