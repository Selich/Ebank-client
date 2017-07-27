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
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {

  public clientForm: FormGroup;
  bank: Bank;
  client: Client;
  accounts: Account[];
  account: Account;
  address: Address;
  roles: Role[] = [{
      id: 1,
      name: 'Client'
    },
    {
      id: 2,
      name: 'Admin'
    }
  ]
  role: Role;
  errorMsg: string;
  id: number;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MdDialogRef < ClientUpdateComponent > ,
    private accountService: AccountService,
    private clientService: ClientService
  ) {}

  ngOnInit() {
    this.form();
    this.getClientById(this.id);
  }

  getClientById(id) {
    this.clientService.getClientById(id)
    .subscribe(resClientData => this.client = resClientData,
              resClientError  => this.errorMsg = resClientError);
  }

  onSubmit(client, id) {
    console.log(client);
    this.clientService.updateClient(client, id)
   .subscribe(resClient => this.client = resClient,
             resClientError  => this.errorMsg = resClientError);
    this.dialogRef.close();
  }

  form() {
    this.clientForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      jmbg: ['', Validators.required],
      password: ['', Validators.required],
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        country: ['', Validators.required],
      }),
    });
  }
}
