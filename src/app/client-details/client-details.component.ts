import { Component, OnInit, Input } from '@angular/core';

import { ClientService } from '../services/client.service';
import { MdDialog, MdDialogRef, MdButton} from '@angular/material';
import { Client } from '../models';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<ClientDetailsComponent>) { }

  @Input() client: Client;
  public id : number;

  getClient(){


  }

  closeModal(){
    this.dialogRef.close();
  }

  ngOnInit() {
  }



}
