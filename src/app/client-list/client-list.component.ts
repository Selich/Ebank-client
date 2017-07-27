import { ClientAccountsComponent } from './../client-accounts/client-accounts.component';
import { ClientUpdateComponent } from './../client-update/client-update.component';
import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Client } from './../models';
import { Router } from '@angular/router';

import { ClientService } from '../services/client.service';
@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  client: Client;
  clients: Client[];
  errorMsg: String;

  constructor(
    private clientService: ClientService,
    private dialog: MdDialog
  ) {}

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this.clientService.getClients()
    .subscribe(resClientsData => this.clients = resClientsData,
              resClientError  => this.errorMsg = resClientError);
    console.log(this.errorMsg);
  }
  openUpdateDialog(id) {
    const dialogRef = this.dialog.open(ClientUpdateComponent);
    dialogRef.componentInstance.id = id;
    dialogRef.afterClosed()
    .subscribe(client => this.client = client)
  }

  openAccountsDialog(id) {
    const dialogRef = this.dialog.open(ClientAccountsComponent);
    dialogRef.componentInstance.id = id;
    dialogRef.afterClosed()
    .subscribe(client => this.client = client)
  }

  deleteClient(id, i) {
    this.clientService.deleteClient(id)
        .subscribe(response => {
          this.clients.splice(i, 1),
          console.log(i);
        })

  }





}
