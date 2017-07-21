import { Client } from '../models';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  client: Client;
  // messages: Messages[] = [];

  constructor() { }


  ngOnInit() {
    this.client = new Client();
  }

  // onSubmit(): void {
  //   this.authService
  //       .login(this.client)
  //       .subscribe(isLoggedIn => {
  //         if (isLoggedIn) {
  //           if ()
  //         }
  //       })

  // }

}
