import {
  Account,
  Address,
  Bank,
  Client,
  Role
} from '../models';
import {
  AccountService
} from '../services/account.service';
import {
  ClientService
} from '../services/client.service';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  MdDialog,
  MdDialogRef
} from '@angular/material';


@Component({
  selector: 'app-client-accounts',
  templateUrl: './client-accounts.component.html',
  styleUrls: ['./client-accounts.component.css']
})
export class ClientAccountsComponent implements OnInit {

  public accountForm: FormGroup;
  bank: Bank;
  client: Client;
  account: Account;
  address: Address;
  role: Role;
  errorMsg: string;
  accounts: Account[];
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

  onSubmit(account) {
    console.log(account);
    this.accountService.postAccount(this.id, account)
      .subscribe(res => this.account = res);
    this.dialogRef.close();
    console.log(this.account);
  }

  getAccountsById(id) {
    this.accountService.getAccountsById(id)
      .subscribe(resAccounts => this.accounts = resAccounts,
        resError => this.errorMsg = resError);
  }

  deleteAccount(id, i) {
    this.accountService.deleteAccount(id)
      .subscribe(response => {
        this.accounts.splice(i, 1),
          console.log(i);
      })

  }

  form() {
    this.accountForm = this.fb.group({
      bank: this.fb.group({
        bankName: ['', Validators.required],
      }),
      accountNumber: ['', Validators.required],
      accountBalance: ['', Validators.compose([Validators.required, Validators.pattern(/^[0-9]+$/)])],
      availableBalance: ['', Validators.compose([Validators.required, Validators.pattern(/^[0-9]+$/)])],
    });
  }

}
