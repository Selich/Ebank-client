import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import { ClientListService } from './client-list/client-list.service'
import { AccountService } from './transaction/account.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientListComponent } from './client-list/client-list.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { AccountListComponent } from './account-list/account-list.component';
import { ClientSearchComponent } from './client-search/client-search.component';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { TransactionComponent } from './transaction/transaction.component';
import { MainComponent } from './main/main.component';

export const appRoutes: Routes = [
  {
    path: 'dashboard' ,
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'dashboard',pathMatch: 'full'},
      { path: 'clients', component: ClientListComponent},
      { path: 'transactions', component: TransactionListComponent},
      { path: 'create', component: ClientCreateComponent},
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'app' ,
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'accounts',pathMatch: 'full'},
      { path: 'transaction', component: TransactionComponent},
      { path: 'exchangeRates', component: ExchangeComponent},
    ]
  },
];
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    DashboardComponent,
    ClientListComponent,
    TransactionListComponent,
    AccountListComponent,
    ClientSearchComponent,
    ClientCreateComponent,
    TransactionComponent,
    ExchangeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [ ClientListService, AccountService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
