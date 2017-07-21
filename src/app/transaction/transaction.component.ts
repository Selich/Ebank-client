import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import {
  AccountService
} from '../services/account.service';
import {
  TransactionService
} from '../services/transaction.service';

import {
  Account,
  Client,
  Transaction,
  Currency
} from '../models';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  // TODO: sredi za transaction
  transactionForm: FormGroup;
  accounts: Account[] = [];
  account: Account;
  currency: Currency;
  // get from db symbols only
  // currencySymbol =  this.currency.currencySymbol[];
  selectedAccount: Account;


  constructor(
    private fb: FormBuilder,
    private accountService: AccountService) {}

  ngOnInit() {
    this.accountService.getFake()
      .then(accounts => this.accounts = accounts);
    // .subscribe(resAccountData => this.accounts = resAccountData.slice(1,5));
    this.form();
  }

  form() {
    this.transactionForm = this.fb.group({
      senderName: ['', Validators.required],
      senderAccountNumber: ['', Validators.required],
      senderDescription: ['', Validators.required],
      senderAddress: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        country: ['', Validators.required],
      }),
      recieverName: ['', Validators.required],
      recieverAccountNumber: ['', Validators.required],
      recieverAddress: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        country: ['', Validators.required],
      }),
      paymentCode: ['', Validators.required],
      currency: ['', Validators.required],
      value: ['', Validators.required],
      model: ['', Validators.required],
      referenceNumber: ['', Validators.required],
    })
  }
  onSelect(account: Account) {
    this.selectedAccount = account;
  }
  onSubmit(transaction: Transaction) {
    console.log(transaction);
  }




}
