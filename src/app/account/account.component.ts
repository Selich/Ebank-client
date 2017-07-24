import { ClientService } from './../services/client.service';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  AccountService
} from './account.service';


import {
  Account
} from '../models';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit {

  accounts: Account[] = [];

  constructor(
    private accountService: AccountService,
    private clientService: ClientService
  ) {}

  ngOnInit() {
    this.accountService.getFake()
      .then(accounts => this.accounts = accounts.slice(1, 5));
    // .subscribe(resAccountData => this.accounts = resAccountData.slice(1,5));
  }
}
