import { Account } from './../models';
import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

import { ActivatedRoute, Params } from '@angular/router';
import { ClientService } from '../services/client.service';
import { MdDialog, MdDialogRef, MdButton} from '@angular/material';
import { Client } from '../models';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  @Input() client: Client;

  constructor(
    public route: ActivatedRoute,
    public clientService: ClientService,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      const id = +params['id'];
      this.clientService.getClient(id)
        .map(client => this.client = client).subscribe();


    });
  }
  closeModal() {
  }
  goBack() {
    this.location.back();
  }



}
