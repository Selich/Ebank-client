import { TransactionService } from './../services/transaction.service';
import { Component, OnInit } from '@angular/core';


import { Transaction } from '../models';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  transactions: Transaction[];

  constructor(
    private transactionService: TransactionService
  ) { }

  ngOnInit() {
    // this.transactionService.getTransactions()
    // .then(transactions => this.transactions = transactions);
  }

}
