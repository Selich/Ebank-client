import { TransactionService } from './../services/transaction.service';
import { Client, Transaction } from './../models';
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

  accounts: Account[] = [];
  account: Account;
  transaction: Transaction;
  transactions: Transaction[];
  selectedAccount: Account;
  currentClient: Client;
  constructor(
    private accountService: AccountService,
    private transactionService: TransactionService
  ) { }

  ngOnInit() {

    this.currentClient = JSON.parse(localStorage.getItem('currentClient'));
    this.getAccountsByClient(this.currentClient.id);

  }

  getAccountsByClient(id) {
    this.accountService.getAccountsById(id)
      .subscribe(accounts => this.accounts = accounts);
      console.log(this.accounts);

  }
  getTransactionsByAccount(accountNumber) {
    this.transactionService.getTransactionByAccount(accountNumber)
      .subscribe(transactionsRes => this.transactions = transactionsRes);
      console.log(this.transactions);

  }


  onSelect(account: Account) {
    this.selectedAccount = account;
    this.getTransactionsByAccount(this.selectedAccount.accountNumber);
  }
}
