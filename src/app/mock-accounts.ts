import { Account, Client, Address, Transaction } from './models';

export const ACCOUNTS: Account[] = [
  { accountType: "transaction", accountNumber: "1231321", accountBalance: 13000},
  { accountType: "transaction", accountNumber: "1231321", accountBalance: 93000},
  { accountType: "transaction", accountNumber: "1231321", accountBalance: 14000},
  { accountType: "transaction", accountNumber: "1231321", accountBalance: 11000},
  // { accountType: "transaction", accountNumber: "1231321", accountBalance: 13000},
  // { accountType: "transaction", accountNumber: "1231321", accountBalance: 13000},
  // { accountType: "transaction", accountNumber: "1231321", accountBalance: 13000},
  // { accountType: "transaction", accountNumber: "1231321", accountBalance: 13000},
  // { accountType: "transaction", accountNumber: "1231321", accountBalance: 13000},
  // { accountType: "transaction", accountNumber: "1231321", accountBalance: 13000},
  // { accountType: "transaction", accountNumber: "1231321", accountBalance: 13000},
  // { accountType: "transaction", accountNumber: "1231321", accountBalance: 13000},
];


//   id: number;
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
//   jmbg: string;
//   isAdmin: boolean;

//
// export class Address{
//   street : string;
//   city : string;
//   country: string;
// }
export const CLIENTS: Client[] = [
  { id: 1, firstName: "Nikola", lastName: "Selic", email: "nikla@gmail.com", password: "pass", jmbg: "144342424",
    address: {street: "Poenkareova 22", city: "Paracin", country: "Serbia"}},
  { id: 2, firstName: "Nikola", lastName: "Selic", email: "nikla@gmail.com", password: "pass", jmbg: "144342424",
    address: {street: "Poenkareova 22", city: "Paracin", country: "Serbia"}},
  { id: 3, firstName: "Nikola", lastName: "Selic", email: "nikla@gmail.com", password: "pass", jmbg: "144342424",
    address: {street: "Poenkareova 22", city: "Paracin", country: "Serbia"}},
];




// export class Transaction{
//    id: number;
//    senderAccount: Account;
//    senderDescription: string;
//    receiverAccount: Account;
//    currency: string;
//    transactionDate: string;
//    amountTransferred: number;
// }

export const TRANSACTIONS: Transaction[] = [
   { id: 1, senderAccount:
  // { accountType: "transaction", accountNumber: "1231321", accountBalance: 13000},
    ACCOUNTS[0],
    senderDescription:"asdfasfd", receiverAccount:
    ACCOUNTS[1],
    currency: "eu", transactionDate: "12/32/4144", amountTransferred: 1240},
   { id: 1, senderAccount:
  // { accountType: "transaction", accountNumber: "1231321", accountBalance: 13000},
    ACCOUNTS[0],
    senderDescription:"asdfasfd", receiverAccount:
    ACCOUNTS[1],
    currency: "eu", transactionDate: "12/32/4144", amountTransferred: 1240}


]
