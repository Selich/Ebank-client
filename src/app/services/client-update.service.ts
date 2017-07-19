import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Client } from '../models';
import { CLIENTS} from '../mock-accounts';

import 'rxjs/add/operator/map';
@Injectable()
export class ClientUpdateService {

  constructor(private http: Http) {
  }



}
