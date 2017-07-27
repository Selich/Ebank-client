import { Currency } from './../models';
import { ExchangeService } from './../services/exchange.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {

  exchangeList: Currency[];
  errorMsg: String;
  constructor(
      private exchangeService: ExchangeService
  ) { }

  ngOnInit() {
    this.getExchange();
  }

  getExchange() {
    this.exchangeService.getClients()
    .subscribe(resExchange => this.exchangeList = resExchange,
              resClientError  => this.errorMsg = resClientError);
    console.log(this.errorMsg);
  }
}
