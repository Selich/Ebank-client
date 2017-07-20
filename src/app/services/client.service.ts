import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Client } from '../models';
import { CLIENTS} from '../mock-accounts';

import "rxjs";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
@Injectable()
export class ClientService {

   url: string = "http://localhost:8080/api/v1/ebank";

  constructor(private http: Http) {
  }

  createClient(client : Client){

  }

  getFake(): Promise<Client[]> {
    return Promise.resolve(CLIENTS);
  }


  getClients() {
    return this.http.get(this.url + "/clients")
      .map(data => data.json()).toPromise();
  }

  getClient(client: Client) {
    return this.http.get("/clients/" + client.id)
      .map(data => data.json()).toPromise();
  }
  updateClient(client: Client) {
    return this.http.put("/clients/" + client.id, client)
      .map(data => data.json()).toPromise();
  }
  deleteClient(client: Client) {
    return this.http.delete("/clients/" + client.id)
      .map(data => data.json()).toPromise();
  }
}