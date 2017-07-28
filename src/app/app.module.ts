import { BankService } from './bank.service';
import { AdminGuardService } from './services/adminguard.service';
import { ExchangeService } from './services/exchange.service';
import { AuthGuardService } from './services/authguard.service';
import { AuthService } from './services/auth.service';
import { TransactionService } from './services/transaction.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule,
         MdDialogModule,
         MdSelectModule,
         MdInputModule,
         } from '@angular/material';

import { AccountService } from './services/account.service';
import { ClientService } from './services/client.service';
import { TransactionListService } from './services/transaction-list.service';

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
import { ClientUpdateComponent } from './client-update/client-update.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientAccountsComponent } from './client-accounts/client-accounts.component';
import { BankCreateComponent } from './bank-create/bank-create.component';

export const appRoutes: Routes = [
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
    canActivate: [AuthGuardService],
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'accounts', pathMatch: 'full'},
      { path: 'accountDetail', component: AccountDetailComponent},
      { path: 'transaction', component: TransactionComponent},
      //
      { path: 'exchangeRates', component: ExchangeComponent},
      // admin
      { path: 'clients', canActivate: [AdminGuardService], component: ClientListComponent},
      { path: 'transactions', canActivate: [AdminGuardService], component: TransactionListComponent},
      { path: 'create', canActivate: [AdminGuardService],  component: ClientCreateComponent},
      { path: 'bank', canActivate: [AdminGuardService],  component: BankCreateComponent},
    ]
  },
];
@NgModule({
   entryComponents: [
      ClientUpdateComponent,
      ClientDetailsComponent,
      ClientAccountsComponent

   ],
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
    ClientUpdateComponent,
    ClientDetailsComponent,
    ClientAccountsComponent,
    BankCreateComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    BrowserAnimationsModule,
   //  material
    MdButtonModule,
    MdDialogModule,
    MdSelectModule,
    MdInputModule,
   //  router
    RouterModule.forRoot(
      appRoutes
    )

  ],
  exports: [
    RouterModule,
    MdInputModule
  ],
  providers: [
    ClientService,
    TransactionListService,
    AccountService,
    AdminGuardService,
    TransactionService,
    AuthGuardService,
    AuthService,
    ExchangeService,
    BankService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
