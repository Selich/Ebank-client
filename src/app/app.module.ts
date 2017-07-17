import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';

import { RouterModule, Routes } from '@angular/router';

import { AccountService } from './services/account.service';
import { ClientListService } from './services/client-list.service';
import { TransactionListService } from './services/transaction-list.service';
import { ClientCreateService } from './services/client-create.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientListComponent } from './client-list/client-list.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { AccountListComponent } from './account-list/account-list.component';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { TransactionComponent } from './transaction/transaction.component';
import { MainComponent } from './main/main.component';

// filters
import { ClientListFilter } from './client-list/client-list-filter';

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
      { path: 'accountDetail', component: AccountDetailComponent},
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
    ClientCreateComponent,
    TransactionComponent,
    ExchangeComponent,
    AccountDetailComponent,
    ClientListFilter,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [
    ClientListService,
    TransactionListService,
    AccountService,
    ClientCreateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
