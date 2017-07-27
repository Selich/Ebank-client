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
  transactionForm: FormGroup;
  accounts: Account[] = [];
  account: Account;
  selectedAccount: Account;
  transaction: Transaction;
  currency: Currency;
  currencies: Currency[];
  selectedCurrency: Currency;
  currentClient: Client;


  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private transactionService: TransactionService
  ) {}

  ngOnInit() {
    this.currentClient = JSON.parse(localStorage.getItem('currentClient'));
    this.getAccountsByClient();
    this.getCurrencies();
    this.form();
  }

  getCurrencies() {
    this.transactionService.getExchangeRate()
        .then(currecies => this.currencies = currecies);
  }

  getAccountsByClient() {
    this.accountService.getAccountsById(this.currentClient.id)
      .map(accounts => this.accounts = accounts);

  }

  form() {
    this.transactionForm = this.fb.group({
      senderName: ['', Validators.required],
      senderAccount: this.fb.group({
      accountNumber: ['', Validators.required],
      }),
      recieverAccount: this.fb.group({
      accountNumber: ['', Validators.required],
      }),
      senderDescription: [''],
      recieverName: ['', Validators.required],
      paymentCode: ['', Validators.required],
      currency: ['', Validators.required],
      value: ['', Validators.compose([Validators.required, Validators.pattern(/^[0-9]+$/)])],
      model: ['', Validators.required],
      referenceNumber: ['', Validators.required]
    })
  }

  checksumValidator(model: string, referenceNumber: string) {
    const m = Number(model);
    const firstK = Number(referenceNumber.substr(0, 2));
    const lastK = referenceNumber.substr(2, referenceNumber.length);
    let p = '';
    let i: number;
    for (i = 0; i < lastK.length; i++) {
      if (lastK[i].match(/\d+/)) {
        p += lastK[i]
      } else if (lastK[i].match(/\A+/)) {
        p += String(lastK[i].charCodeAt(0) - 55);
      } else {
        break;
      }
    }
    const decR = (Number(p) * 100) / m * 10 % 10 / 10;
    let b = m + 1 - Math.round(decR * m);
    b = Number((('0' + b).slice(-2)))
    return (b === firstK);

  }
  onSelect(account: Account) {
    this.selectedAccount = account;
  }
  onSubmit(transaction: Transaction) {
    this.transactionService.postTransaction(transaction);
    console.log(transaction);
  }

  onCurrencySelect() {
  }




}
