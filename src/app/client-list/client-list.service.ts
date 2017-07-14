import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
@Injectable()
export class ClientListService{

  constructor(private http: Http) {
  }



  getClients(){
    return this.http.get("http://localhost:8080/api/v1/user/list")
    .map((response:Response) => response.json());
  }



}
