import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AdminGuardService implements CanActivate {

  constructor(
    private router: Router
  ) { }


  canActivate() {
    if (localStorage.getItem('currentClient.role.name') === 'Admin') {
      return true;
    }

    this.router.navigate(['/app']);
    return false

  }

}


