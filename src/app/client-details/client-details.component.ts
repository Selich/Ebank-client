// import { MdDialog, MdDialogRef, MdButton} from '@angular/material';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit, Input} from '@angular/core';
import { Location } from '@angular/common';

import { Client } from '../models';
import { ClientService } from '../services/client.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  client: Client;

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.clientService.getClientFake(+params.get('id')))
    .subscribe(client => this.client = client);
  }
  goBack() {
    this.location.back();
  }



}