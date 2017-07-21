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
  Bank
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
  address: Address;


constructor(
  private fb: FormBuilder,
  private clientService: ClientService
) {}
ngOnInit() {
  this.form();
  this.addAccount();
}

form() {
  this.clientForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],

    }),
    email: ['', Validators.required],
    jmbg: ['', Validators.required],
    password: ['', Validators.required],
    accounts: this.fb.array([])
  });
}

// export class Account {
//   accountType: string;
//   accountNumber: string;
//   accountBalance: number;
//   availableBalance: number;
// }
initAccounts() {
  return this.fb.group({
    accountType: ['', Validators.required],
    bankName: ['', Validators.required],
    accountNumber: ['', Validators.required],
    accountBalance: ['', Validators.required],
    availableBalance: ['', Validators.required],
  })
}

addAccount() {
  const control = < FormArray > this.clientForm.controls['accounts'];
  const accCtrl = this.initAccounts();
  control.push(this.initAccounts());

}

removeAccount(i: number) {
  const control = < FormArray > this.clientForm.controls['accounts'];
  control.removeAt(i);
}

onSubmit(client: Client) {
  console.log(client);

}



}
