import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { TransactionService } from '../services/transaction.service';

import { Account, Client, Transaction, Currency } from '../models';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  // TODO: sredi za transaction
  rForm: FormGroup;
  submitted: boolean;
  events: any[] = [];
  post: any;
  firstName: string = '';
  lastName: string = '';
  password: string = '';
  accounts: Account[] = [];
  account: Account;
  currency: Currency;
  // get from db symbols only
  // currencySymbol =  this.currency.currencySymbol[];
  selectedAccount: Account;


  constructor(private formBuilder: FormBuilder,
    private accountService: AccountService) {

  }

  save(model: Transaction , isValid: boolean){
     this.submitted = true;
 }
  addPost(post) {
    this.password = post.password;
   //  this.currency.currencySymbol = post.currency.currencySymbol;
    this.account.accountBalance = post.account.accountBalance;
    this.account.accountNumber = post.account.accountBalance;
    this.account.accountBalance = post.account.accountBalance;
  }
  ngOnInit() {
    this.accountService.getFake()
      .then(accounts => this.accounts = accounts);
    // .subscribe(resAccountData => this.accounts = resAccountData.slice(1,5));



  }

      // 'firstName': [null, Validators.required],
      // 'lastName': [null, Validators.required],
      // 'password': [null, Validators.compose([Validators.required,
      //   Validators.minLength(5)
      // ])],
      // 'account': [null, Validators.required]
// export class Transaction{
//    id: number;
//    senderAccount: Account;
//    senderDescription: string;
//    receiverAccount: Account;
//    currency: Currency;
//    transactionDate: string;
//    amountTransferred: number;
// }
   // form(){
   //  this.rForm = new FormGroup({
   //    name: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
   //    amountTransferred: new FormControl('', [<any>Validators.required]),
   //
   // });
   //
   // }





  onSelect(account: Account) {
    this.selectedAccount = account;
  }



}
