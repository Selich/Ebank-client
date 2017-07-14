import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators } from '@angular/forms';

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


  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {
  }

}
