import { TransactionService } from './../services/transaction.service';
import { BankService } from './../bank.service';
import {
  Account,
  Address,
  Bank,
  Client,
  Role
} from '../models';
import {
  AccountService
} from '../services/account.service';
import {
  ClientService
} from '../services/client.service';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  MdDialog,
  MdDialogRef
} from '@angular/material';


import { Transaction } from '../models';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  transaction: Transaction;
  transactions: Transaction[];
  errorMsg: string;
  client: Client;
  account: Account;
  address: Address;
  role: Role;
  accounts: Account[];
  id: number;
  banks: Bank[];
  bank: Bank;

  constructor(
    private transactionService: TransactionService,
    private accountService: AccountService,
    public dialogRef: MdDialogRef < TransactionListComponent > ,
  ) { }

  getAccountsById(id) {
    this.accountService.getAccountsById(id)
      .subscribe(resAccounts => {
        this.accounts = resAccounts,
        console.log(resAccounts)
      },
        resError => this.errorMsg = resError);
  }
  ngOnInit() {
    // this.getTransactionsById();
  }

    // this.transactionService.getAccountsById(id)
    //   .subscribe(resAccounts => {
    //     this.accounts = resAccounts,
    //     console.log(resAccounts)
    //   },
    //     resError => this.errorMsg = resError);



}
