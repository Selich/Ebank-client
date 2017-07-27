import { Client } from './../models';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { ChartsModule } from 'ng2-charts';

import { Account } from '../models';
import { ACCOUNTS } from '../mock-accounts';
@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {

  // accountType: string;
  // accountNumber: string;
  // accountBalance: number;
  // availableBalance: number;


  accounts: Account[] = [];
  account: Account;
  selectedAccount: Account;
  currentClient: Client;
  constructor(private accountService: AccountService) { }

  ngOnInit() {

    this.currentClient = JSON.parse(localStorage.getItem('currentClient'));
    this.getAccountsByClient(this.currentClient.id);

  }

  getAccountsByClient(id) {
    this.accountService.getAccountsById(id)
      .subscribe(accounts => this.accounts = accounts);
      console.log(this.accounts);

  }

  onSelect(account: Account) {
    this.selectedAccount = account;
  }
}
