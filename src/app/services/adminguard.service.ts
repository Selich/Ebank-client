import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Client } from '../models';

@Injectable()
export class AdminGuardService implements CanActivate {


    currentClient: Client;
  constructor(
    private router: Router
  ) { }


  canActivate() {
    this.currentClient = JSON.parse(localStorage.getItem('currentClient'));
    if (this.currentClient.role.id === 1) {
      return true;
    }

    this.router.navigate(['/app']);
    return false

  }

}


