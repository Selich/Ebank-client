import {
  MdButton,
  MdSelect,
  MdInputContainer,
  MdInputDirective
 } from '@angular/material';
import {
  ClientService
} from './../services/client.service';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormArray,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  Client,
  Address,
  Bank,
  Role
} from '../models';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {
  public clientForm: FormGroup;
  bank: Bank;
  client: Client;
  accounts: Account[];
  account: Account;
  address: Address;
  roles: Role[] = [
    {id: 1, name: 'Client'},
    {id: 2, name: 'Admin'}
  ]
  role: Role;
  errorMsg: string;

constructor(
  private fb: FormBuilder,
  private clientService: ClientService
) {}
ngOnInit() {
  this.form();
  // this.addAccount();
}

onSubmit(client: Client) {
  this.clientService.postClient(client)
   .subscribe(resClient => this.client = resClient,
             resClientError  => this.errorMsg = resClientError);
             console.log(JSON.stringify(client));
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
    role: this.fb.group({
      name: ['', Validators.required],
    }),
  });
}

initAccounts() {
  return this.fb.group({
    bank: ['', Validators.required],
    accountNumber: ['', Validators.required],
    accountBalance: ['', Validators.required],
    availableBalance: ['', Validators.required],
  })
}

}
