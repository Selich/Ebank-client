import {
  ExchangeService
} from './../services/exchange.service';
import {
  Router
} from '@angular/router';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidatorFn
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
  errorMsg: string;


  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private transactionService: TransactionService,
    private exchangeService: ExchangeService,
    private router: Router,
    // private control: AbstractControl
  ) {}

  ngOnInit() {
    this.currentClient = JSON.parse(localStorage.getItem('currentClient'));
    this.getCurrencies();
    this.form();
    this.getAccountsByClient(this.currentClient.id);
  }

  getCurrencies() {
    this.exchangeService.getCurrencies()
      .subscribe(currenciesRes => this.currencies = currenciesRes,
        resCurreniesError => this.errorMsg = resCurreniesError);
    // location.reload();
    console.log(JSON.stringify(this.currencies));
  }

  getAccountsByClient(id) {
    this.accountService.getAccountsById(this.currentClient.id)
      .subscribe(accounts => this.accounts = accounts);
    console.log(this.accounts);

  }

  form() {
    this.transactionForm = this.fb.group({
      senderName: ['', Validators.required],
      senderAccount: ['', Validators.required],
      receiverAccount: ['', Validators.required],
      senderDescription: [''],
      receiverName: ['', Validators.required],
      paymentCode: ['', Validators.required],
      currency: this.fb.group({
        currencySymbol: ['', Validators.required],
      }),
      value: ['', Validators.compose([Validators.required, Validators.pattern(/^[0-9]+$/)])],
      model: ['', Validators.required],
      referenceNumber: ['', Validators.required]
    })
  }
  checksumValidator(model: string, referenceNumber: string): ValidatorFn {
    return (control: AbstractControl): {
      [key: string]: any
    } => {
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
      if (b === firstK) {
        return {
          valid: true
        }
      }
      return {
        valid: false
      }
    }
  }
  onSelect(account: Account) {
    this.selectedAccount = account;
  }
  onSubmit(transaction: Transaction) {
    this.transactionService.postTransaction(transaction)
      .subscribe(transactionRes => this.transaction = transactionRes,
        resClientError => this.errorMsg = resClientError);
    // location.reload();
    this.getAccountsByClient(this.currentClient.id);
    this.getAccountsByClient(this.currentClient.id);
    // console.log(JSON.stringify(transaction));
  }

  onCurrencySelect() {}




}
