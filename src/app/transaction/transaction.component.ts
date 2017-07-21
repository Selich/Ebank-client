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
  currencies: Currency[];
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
      senderAccount: ['', Validators.required, Validators.pattern('[0-9]')],
      senderDescription: [''],
      senderAddress: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        country: ['', Validators.required],
      }),
      recieverName: ['', Validators.required],
      recieverAccount: ['', Validators.required, Validators.pattern('[0-9]')],
      recieverAddress: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        country: ['', Validators.required],
      }),
      paymentCode: ['', Validators.required],
      currency: ['', Validators.required],
      value: ['', Validators.required, Validators.pattern('[0-9]')],
      model: ['', Validators.required],
      referenceNumber: ['', Validators.required, Validators.pattern('[0-9]')],
    })
  }

  checksumValidator(c: FormControl, model: string, referenceNumber: string) {
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
    console.log(transaction);
  }





}
