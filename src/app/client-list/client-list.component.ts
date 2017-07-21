import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef} from '@angular/material';
import { Client } from './../models';
import { Router } from '@angular/router';

import { ClientService } from '../services/client.service';
@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: Client[] = [];

  constructor(
    private clientService: ClientService,
  ) {}

  ngOnInit() {
    this.clientService.getClientsFake()
    .then(clients => this.clients = clients);
  }





}
