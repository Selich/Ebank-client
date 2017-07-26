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

  clients: Client[];
  errorMsg: String;

  constructor(
    private clientService: ClientService,
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





}
