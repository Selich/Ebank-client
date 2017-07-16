import { Component, OnInit } from '@angular/core';
import { ClientListService } from '../services/client-list.service';
import { ClientListFilter } from './client-list-filter';

import { Client } from './../models';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients : Client[];

  constructor(private clientListService : ClientListService) { }

  ngOnInit() {
    this.clientListService.getFake()
    .then(clients => this.clients = clients);
   //  this.clientListService.getClients()
   //  .subscribe(resClientData => this.clients = resClientData);
  }

}
