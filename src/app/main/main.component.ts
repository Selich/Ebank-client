import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Client } from './../models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  currentClient: Client;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  ngOnInit() {
    this.currentClient = JSON.parse(localStorage.getItem('currentClient'));
    console.log(this.currentClient);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
