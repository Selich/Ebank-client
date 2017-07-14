import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientListComponent } from './client-list/client-list.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { AccountListComponent } from './account-list/account-list.component';
import { ClientSearchComponent } from './client-search/client-search.component';
import { ClientCreateComponent } from './client-create/client-create.component';

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
  }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ClientListComponent,
    TransactionListComponent,
    AccountListComponent,
    ClientSearchComponent,
    ClientCreateComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
