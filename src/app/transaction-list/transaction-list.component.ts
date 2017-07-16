import { Component, OnInit } from '@angular/core';

import { TransactionListService } from '../services/transaction-list.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
