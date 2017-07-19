import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators } from '@angular/forms';

import { Client, Role } from '../models';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  // todo client model

  rForm: FormGroup;
  post: any;
  firstName:string = '';
  lastName:string = '';
  password:string = '';
  jmbg:string
  client: Client;
  roles: Role[] = [
    { id: 1,name: 'client'} ,
    { id: 2,name: 'admin'} ,
 ]



  constructor(private formBuilder: FormBuilder) {
     this.client= new Client();

  }

  ngOnInit() {
    this.rForm = this.formBuilder.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required,
                                             Validators.minLength(5)
                                           ])],
      'validate': ''
    });
  }


  addPost(post){
    this.firstName = post.firstName;
    this.lastName      = post.lastName;
    this.password      = post.password;
  }



}
