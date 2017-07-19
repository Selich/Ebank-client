import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { ClientListFilter } from './client-list-filter';
import { MdDialog, MdDialogRef} from '@angular/material';
import { Client } from './../models';

import { ClientUpdateComponent } from '../client-update/client-update.component';
@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: Client[] = [];
  client: Client;

  constructor(private clientListService: ClientService,
              public dialog: MdDialog) { }

  ngOnInit() {
     this.getClients();
  }

  onSelect(client) {
    let updateClient = this.dialog.open(ClientUpdateComponent);
    updateClient.afterClosed().subscribe(client => {
      this.client = client;
    })
  }
  deleteClient(id: number, index: number) {
    //  this.clientListService.deleteClient(id).subscribe(response => {
    //    this.clients.splice(index,1);
    alert(id)
    this.clients.splice(index,1);

  }

  getClients(){
     this.clientListService.getClients().then(clients => this.clients = clients)
 }


}
