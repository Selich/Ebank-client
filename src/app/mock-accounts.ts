import { Account, Client } from './models';

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
  { id: 1, firstName: "Nikola", lastName: "Selic", email: "nikla@", password: "pass", jmbg: "144342424",
    address: { street: "poenkareva", city: "belgrade", country : "serbia"}},
]
