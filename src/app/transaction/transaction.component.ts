import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators } from '@angular/forms';
import { AccountService } from './account.service';

import { Account } from '../models';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  // TODO: sredi za transaction

  rForm: FormGroup;
  post: any;
  firstName:string = '';
  lastName:string = '';
  password:string = '';
  jmbg:string;
  accounts : Account[] = [];
  account : Account;
  selectedAccount : Account;


  constructor(private formBuilder: FormBuilder,
              private accountService : AccountService) {

    this.rForm = formBuilder.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required,
                                             Validators.minLength(5)
                                           ])],
      'account': [null, Validators.required]
    });


  }
  addPost(post){
    this.firstName = post.firstName;
    this.lastName      = post.lastName;
    this.password      = post.password;
  }
  ngOnInit() {
    this.accountService.getFake()
    .then(accounts => this.accounts = accounts);
    // .subscribe(resAccountData => this.accounts = resAccountData.slice(1,5));

  }

  onSelect(account: Account){
    this.selectedAccount = account;
  }

}
