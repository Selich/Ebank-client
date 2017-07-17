import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';

import { Client } from '../models';
import { CLIENTS} from '../mock-accounts';

import 'rxjs/add/operator/map';
@Injectable()
export class ClientCreateService {

  constructor(private http: Http) {
  }


  createClient(client : Client){
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers});
    let body = JSON.stringify(client);
    return this.http.post('api/v1/bank', body , options).map((res : Response ) => res.json());

  }

  getClients() {
    return this.http.get("http://localhost:8080/api/v1/ebank/client/list")
      .map((response: Response) => response.json());
  }
  getFake(): Promise<Client[]> {
    return Promise.resolve(CLIENTS);
  }


}
