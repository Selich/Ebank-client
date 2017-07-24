import { Account } from './../models';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Client } from '../models';
import { CLIENTS} from '../mock-accounts';

import 'rxjs/add/operator/map';
@Injectable()
export class ClientService {

  clients: Client[];
  private baseUrl = 'http://localhost:8080/api/v1/ebank/client';


  constructor(private http: Http) {
  }


  postClient(client: Client ): Observable<Client> {
    const bodyString = JSON.stringify(client);
    const headers = new Headers({ 'Content-Type': 'application/json'});
    const options = new RequestOptions({ headers: headers});

    return this.http.post('http://localhost:8080/api/v1/ebank/client/create', bodyString, options)
              .map((res: Response) => res.json());
  }

  getClients() {
    return this.http.get(`${this.baseUrl} + /list`)
          .map(res => res.json());
  }

  getCurrentClient() {
    return this.http.get(this.baseUrl + '/' + localStorage.getItem('id'))
          .map(res => res.json());
  }

  getClient() {}

  updateClient() {}

  deleteClient() {}

// FAKE
  getClientsFake(): Promise<Client[]> {
    return Promise.resolve(CLIENTS);
  }
  getClientFake(id: number): Promise<Client> {
    return this.getClientsFake()
    .then(clients => clients.find(client => client.id === id));
  }


}
