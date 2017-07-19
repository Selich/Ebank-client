import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<ClientUpdateComponent>) { }

  ngOnInit() {
  }

}
