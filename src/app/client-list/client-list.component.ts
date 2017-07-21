import { ClientDetailsComponent } from './../client-details/client-details.component';
import { Component, OnInit } from '@angular/core';
import { ClientListFilter } from './client-list-filter';

import { MdDialog, MdDialogRef} from '@angular/material';
import { Client } from './../models';
import { Router } from '@angular/router';

import { ClientUpdateComponent } from '../client-update/client-update.component';

import { ClientService } from '../services/client.service';
@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: Client[] = [];
  client: Client;
  selectedClient: Client;

  constructor(private clientService: ClientService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getFakeClients();
  }

  deleteClient(id: number, index: number) {
    // this.clientService.deleteClient(id).subscribe(response => {
    this.clients.splice(index, 1);
    alert(id);
  }

  onSelect(client) {
    this.selectedClient = client;
  }

  // getClients() {
  //   // this.clientService.getClients()
  //   //   .subscribe(clients => this.clients = clients);
  // }
  getFakeClients() {
    this.clientService.getFake().then(clients => this.clients = clients)
  }


}
