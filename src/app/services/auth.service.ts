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

  constructor(private http: Http) {
  }

  login(client: Client): Observable<boolean> {
      return this.http.post(URL + '/login', client)
                      .map(response => response.json() as Client )
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







}