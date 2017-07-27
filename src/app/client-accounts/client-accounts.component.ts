import {
  Component,
  OnInit
} from '@angular/core';
import {
  MdDialog,
  MdDialogRef
} from '@angular/material';

import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import {
  ClientService
} from '../services/client.service';
import {
  AccountService
} from '../services/account.service';
import {
  Bank,
  Account,
  Client,
  Role,
  Address
} from '../models';

@Component({
  selector: 'app-client-accounts',
  templateUrl: './client-accounts.component.html',
  styleUrls: ['./client-accounts.component.css']
})
export class ClientAccountsComponent implements OnInit {

  public accountForm: FormGroup;
  bank: Bank;
  client: Client;
  accounts: Account[];
  account: Account;
  address: Address;
  role: Role;
  errorMsg: string;
  id: number;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MdDialogRef < ClientAccountsComponent > ,
    private accountService: AccountService,
    private clientService: ClientService
  ) {}

  ngOnInit() {
    this.form();
    this.getAccountsById(this.id);
  }

  // getClientById(id) {
  //   this.clientService.getClientById(id)
  //   .subscribe(resClientData => this.client = resClientData,
  //             resClientError  => this.errorMsg = resClientError);
  // }

  onSubmit(account) {
    console.log(account);
    this.accountService.postAccount(this.id, account)
   .subscribe(res => this.client = res);
    this.dialogRef.close();
  }

  getAccountsById(id) {
    this.accountService.getAccountsById(id)
    .subscribe(res => this.accounts = res,
              resError  => this.errorMsg = resError);
  }


  form() {
    this.accountForm = this.fb.group({
    bank: this.fb.group({
      bankName: ['', Validators.required],
    }),
    accountNumber: ['', Validators.required],
    accountBalance: ['', Validators.required],
    availableBalance: ['', Validators.required],
    });
  }

}
