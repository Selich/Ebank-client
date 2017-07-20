import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef} from '@angular/material';

import { Client, Account} from '../models';
import { ClientService } from '../services/client.service';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {

  accounts : Account[];

  constructor(public dialogRef: MdDialogRef<ClientUpdateComponent>,
              public accountService: AccountService) { }

  ngOnInit() {
  }


  getFakeAccounts() {
    this.accountService.getFake().then(accounts => this.accounts = accounts)
  }

}
