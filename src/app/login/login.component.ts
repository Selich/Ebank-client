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
    this.authService.login(this.client)
                    .subscribe(isLoggedIn => {
                      if (isLoggedIn) {
                        localStorage.setItem('email', this.client.email);
                        localStorage.setItem('password', this.client.password);
                        localStorage.setItem('role', this.client.role.name);

                        console.log(localStorage);
                        this.router.navigate(['/app'])
                      };
                    })
    console.log(this.client);

  }

}
