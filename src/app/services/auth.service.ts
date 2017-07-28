import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Client, Role } from './../models';

import { ACCOUNTS } from './../mock-accounts';

import 'rxjs/add/operator/map';
@Injectable()
export class AuthService {

  client: Client;
  isLoggedIn = false;
  baseUrl = 'http://localhost:8080/api/v1/ebank/auth';

  constructor(private http: Http) {
  }

  login(email: String, password: String) {
    const bodyString = JSON.stringify({email: email, password: password});
    console.log(bodyString);
    const headers = new Headers();
    headers.append( 'Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers});
      return this.http.post(this.baseUrl + '/login', bodyString, options)
          .map((res: Response) => {
            const client = res.json();
            if (client) {
              localStorage.setItem('currentClient', JSON.stringify(client));
              // console.log(localStorage.getItem('currentClient'));
            }
          })
  }


  logout() {
    localStorage.removeItem('currentClient');
  }
 }
