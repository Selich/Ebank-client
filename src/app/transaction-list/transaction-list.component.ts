import { Component, OnInit } from '@angular/core';

import { TransactionListService } from '../services/transaction-list.service';

import { Transaction } from '../models';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  transactions : Transaction[];

  constructor(private transactionListService : TransactionListService) { }

  ngOnInit() {
    this.transactionListService.getFake()
    .then(transactions => this.transactions = transactions);
   //  this.clientListService.getClients()
   //  .subscribe(resClientData => this.clients = resClientData);
  }

}
