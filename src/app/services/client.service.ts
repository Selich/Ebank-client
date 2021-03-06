import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Client, Account } from '../models';
import { CLIENTS} from '../mock-accounts';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class ClientService {

  clients: Client[];
  currentClient: Client;
  auth;
  private baseUrl = 'http://localhost:8080/api/v1/ebank/client';


  constructor(private http: Http) {
    this.currentClient = JSON.parse(localStorage.getItem('currentClient'));
    this.auth = 'Basic ' + btoa(this.currentClient.email + ':' + this.currentClient.password);
  }



  postClient(client: Client) {
    // const username = 'testuser';
    // const password = 'testpass';
    const bodyString = JSON.stringify(client);
    const headers = new Headers();
    headers.append( 'Content-Type', 'application/json');
    headers.append( 'Authorization', this.auth);
    const options = new RequestOptions({headers: headers});

    return this.http.post(this.baseUrl + '/create', bodyString, options)
          .map((res: Response) => res.json())
          .catch(this.errorHandler);
    // console.log(client);
  }

  getClients() {
    const headers = new Headers();
    headers.append( 'Content-Type', 'application/json');
    headers.append( 'Authorization', this.auth);
    const options = new RequestOptions({headers: headers});
    return this.http.get(this.baseUrl + '/list', options)
          .map((res: Response) => res.json())
          .catch(this.errorHandler);
  }

  deleteClient(id) {
    const headers = new Headers();
    headers.append( 'Content-Type', 'application/json');
    headers.append( 'Authorization', this.auth);
    const options = new RequestOptions({headers: headers});
    return this.http.delete(this.baseUrl + '/' + id, options)
          .map((res: Response) => res.json())
          .catch(this.errorHandler);
  }

  getClientById(id) {
    const headers = new Headers();
    headers.append( 'Content-Type', 'application/json');
    headers.append( 'Authorization', this.auth);
    const options = new RequestOptions({headers: headers});
    return this.http.get(this.baseUrl + '/' + id, options)
          .map((res: Response) => res.json())
          .catch(this.errorHandler);
  }


  updateClient(client, id) {
    const bodyString = JSON.stringify(client);
    const headers = new Headers();
    headers.append( 'Content-Type', 'application/json');
    headers.append( 'Authorization', this.auth);
    const options = new RequestOptions({headers: headers});
    return this.http.put(this.baseUrl + '/' + id, bodyString, options)
          .map((res: Response) => res.json())
          .catch(this.errorHandler);
  }
  getCurrentClient() {
    return this.http.get(this.baseUrl + '/' + localStorage.getItem('id'))
          .map(res => res.json());
  }

  errorHandler(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Server error');
  }

// FAKE
  getClientsFake(): Promise<Client[]> {
    return Promise.resolve(CLIENTS);
  }
  getClientFake(id: number): Promise<Client> {
    return this.getClientsFake()
    .then(clients => clients.find(client => client.id === id));
  }


}
