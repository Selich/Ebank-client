import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Client, Role } from './../models';

import { ACCOUNTS } from './../mock-accounts';

import 'rxjs/add/operator/map';
@Injectable()
export class AuthService {

  client: Client;
  isLoggedIn = false;
  URL = 'http://localhost:8080/api/v1/ebank/auth';

  constructor(private http: Http) {
  }

  login(client) {
      return this.http.post('http://localhost:8080/api/v1/ebank/auth/login', client)
                      .map(response => response.json() as Client )
                      // tslint:disable-next-line:no-shadowed-variable
                      .map(client => {
                          if (!Client.isNull(client)) {
                              this.isLoggedIn = true;
                              return true;
                          } else {
                              this.isLoggedIn = false;
                              return false;
                          }
                      })
  }
//   }







}