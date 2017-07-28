import { Router } from '@angular/router';
import { BankService } from './../bank.service';
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


@Component({
  selector: 'app-bank-create',
  templateUrl: './bank-create.component.html',
  styleUrls: ['./bank-create.component.css']
})
export class BankCreateComponent implements OnInit {


  public bankForm: FormGroup;
  bank: Bank;
  banks: Bank[];
  client: Client;
  clients: Client[];
  errorMsg: string;

  constructor(
    private fb: FormBuilder,
    private bankService: BankService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form();
    this.getBanks();
    // this.getClientsFromBank();
  }

  deleteAccount(id, i) {
    this.bankService.deleteBank(id)
      .subscribe(response => {
        console.log(response);
        this.banks.splice(i, 1),
          console.log(i);
      })

  }

  // getClientsFromBank() {
  //   this.bankService.getClientsFromBank(this.id)
  //   .subscribe(resData => this.clients = resData,
  //             resError  => this.errorMsg = resError);
  //   console.log(this.errorMsg);

  // }

  onSubmit(bank) {
    console.log(bank);
    this.bankService.postBank(bank)
      .subscribe(res => this.bank = res,
             resClientError  => this.errorMsg = resClientError);
             this.router.navigate(['app'])
  }
  form() {
    this.bankForm = this.fb.group({
        bankName: ['', Validators.required],
        pib: ['', Validators.required],
    });
  }

  getBanks() {
    this.bankService.getBanks()
    .subscribe(resData => this.banks = resData,
              resError  => this.errorMsg = resError);
    console.log(this.errorMsg);
  }



}
