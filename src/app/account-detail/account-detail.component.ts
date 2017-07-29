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
  sendingTransactions: Transaction[];
  sendingTransaction: Transaction;
  receivingTransactions: Transaction[];
  receivingTransaction: Transaction;
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
  getSendingTransactionsByAccount(accountNumber) {
    this.transactionService.getSendingTransactionByAccount(accountNumber)
      .subscribe(transactionsRes => {
        this.sendingTransactions = transactionsRes
      });
      // console.log(this.sendingTransactions);
  }

  getReceivingTransactionsByAccount(accountNumber) {
    this.transactionService.getReceivingTransactionByAccount(accountNumber)
      .subscribe(transactionsRes => {
       this.receivingTransactions = transactionsRes
       });
  }


  onSelect(account: Account) {
    this.selectedAccount = account;
    this.getSendingTransactionsByAccount(this.selectedAccount.accountNumber);
    this.getReceivingTransactionsByAccount(this.selectedAccount.accountNumber);
  }
}
