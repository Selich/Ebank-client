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
  currentClient: Client;
  auth;
  private baseUrl = 'http://localhost:8080/api/v1/ebank/account';


  constructor(private http: Http) {
    this.currentClient = JSON.parse(localStorage.getItem('currentClient'));
    this.auth = 'Basic ' + btoa(this.currentClient.email + ':' + this.currentClient.password);
  }



  getAccountsById(id) {
    console.log(id);
    const headers = new Headers();
    headers.append( 'Content-Type', 'application/json');
    headers.append( 'Authorization', this.auth);
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
    const bodyString = JSON.stringify(account);
    const headers = new Headers();
    headers.append( 'Content-Type', 'application/json');
    headers.append( 'Authorization', this.auth);
    const options = new RequestOptions({headers: headers});
    console.log(bodyString);
    return this.http.put(this.baseUrl + '/' + id, bodyString, options)
          .map((res: Response) => res.json())
          .catch(this.errorHandler);
  }

  deleteAccount(id) {
    const headers = new Headers();
    headers.append( 'Content-Type', 'application/json');
    headers.append( 'Authorization', this.auth);
    const options = new RequestOptions({headers: headers});
    return this.http.delete(this.baseUrl + '/' + id, options)
          .map((res: Response) => res.json())
          .catch(this.errorHandler);
  }
}
