import { AuthService } from './../services/auth.service';
import {
  Client
} from '../models';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  client: Client;
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}


  ngOnInit() {
    this.form();
    this.client = new Client();
  }

  form() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.authService.login(this.client.email, this.client.password)
    .subscribe(
      data => {
        this.router.navigate(['/app'])
      },
    )
    // this.authService.login(client) .subscribe(resClient => this.client = resClient);
    // localStorage.setItem('client', 'client')
    // this.router.navigate(['/app']);
  }
}
