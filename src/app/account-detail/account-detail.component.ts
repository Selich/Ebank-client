import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

import { Account } from '../models';
@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {

  accounts : Account[] = [];
  account : Account;
  selectedAccount: Account;
  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.getFake()
    .then(accounts => this.accounts = accounts);
    // .subscribe(resAccountData => this.accounts = resAccountData.slice(1,5));

  }


  onSelect(account: Account){
    this.selectedAccount = account;
  }
}
