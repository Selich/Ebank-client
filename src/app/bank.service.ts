import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Transaction, Client, Bank } from './models';
import { Http, Response, RequestOptions, Headers } from '@angular/http';


import 'rxjs/add/operator/map';
@Injectable()
export class BankService {

  bank: Bank;
  banks: Bank[];
  currentClient: Client;
  private baseUrl = 'http://localhost:8080/api/v1/ebank/bank';
  auth;

  constructor(
    private http: Http
  ) {
    this.currentClient = JSON.parse(localStorage.getItem('currentClient'));
    this.auth = 'Basic ' + btoa(this.currentClient.email + ':' + this.currentClient.password);
   }

  getBanks() {
    const headers = new Headers();
    headers.append( 'Content-Type', 'application/json');
    headers.append( 'Authorization', this.auth);
    const options = new RequestOptions({ headers: headers});
    return this.http.get(this.baseUrl,  options)
          .map((res: Response) => res.json())
          .catch(this.errorHandler);
  }
  getClientsFromBank(id) {
    const headers = new Headers();
    headers.append( 'Content-Type', 'application/json');
    headers.append( 'Authorization', this.auth);
    const options = new RequestOptions({ headers: headers});
    return this.http.get(this.baseUrl + '/' + id + '/clients',  options)
          .map((res: Response) => res.json())
          .catch(this.errorHandler);
  }
  postBank(bank) {
    const bodyString = JSON.stringify(bank);
    const headers = new Headers();
    headers.append( 'Content-Type', 'application/json');
    headers.append( 'Authorization', this.auth);
    const options = new RequestOptions({ headers: headers});

    return this.http.post(this.baseUrl + '/create', bodyString, options)
          .map((res: Response) => res.json())
          .catch(this.errorHandler);
  }
  deleteBank(id) {
    const headers = new Headers();
    headers.append( 'Content-Type', 'application/json');
    headers.append( 'Authorization', this.auth);
    const options = new RequestOptions({headers: headers});
    return this.http.delete(this.baseUrl + '/' + id, options)
          .map((res: Response) => res.json())
          .catch(this.errorHandler);
  }
  errorHandler(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Server error');
  }

}
