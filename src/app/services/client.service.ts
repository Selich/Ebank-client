import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Client } from '../models';
import { CLIENTS} from '../mock-accounts';

import 'rxjs/add/operator/map';
@Injectable()
export class ClientService {



  constructor(private http: Http) {
  }


  postClient(client: Client): Observable<Client> {
    const bodyString = JSON.stringify(client);
    const headers = new Headers({ 'Content-Type': 'application/json'});
    const options = new RequestOptions({ headers: headers});

    return this.http.post('http://localhost:8070', bodyString, options)
              .map((res: Response) => res.json());
  }

  getClientsFake(): Promise<Client[]> {
    return Promise.resolve(CLIENTS);
  }
  getClientFake(id: number): Promise<Client> {
    return this.getClientsFake()
    .then(clients => clients.find(client => client.id === id));
  }


}
