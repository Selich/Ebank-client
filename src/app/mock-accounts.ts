import {
  Currency,
  Account,
  Client,
  Address,
  Transaction
} from './models';

export const ACCOUNTS: Account[] = [
  {
    bank: {
      bankName: "Komercijala"
    },
    accountType: "transaction",
    accountNumber: "1231321",
    accountBalance: 13000,
    availableBalance: 13300
  },
  // { accountType: "transaction", accountNumber: "1231321", accountBalance: 13000},
  // { accountType: "transaction", accountNumber: "1231321", accountBalance: 13000},
  // { accountType: "transaction", accountNumber: "1231321", accountBalance: 13000},
  // { accountType: "transaction", accountNumber: "1231321", accountBalance: 13000},
  // { accountType: "transaction", accountNumber: "1231321", accountBalance: 13000},
  // { accountType: "transaction", accountNumber: "1231321", accountBalance: 13000},
  // { accountType: "transaction", accountNumber: "1231321", accountBalance: 13000},
  // { accountType: "transaction", accountNumber: "1231321", accountBalance: 13000},
];


// export class Client {
//   id: number;
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
//   jmbg: string;
//   address : Address;
//   role: Role;
// }
export const CLIENTS: Client[] = [{
    id: 3,
    firstName: 'Nikola',
    lastName: 'Selic',
    email: 'nikla@gmail.com',
    password: "pass",
    jmbg: "144342424",
    address: {
      street: "Poenkareova 22",
      city: "Paracin",
      country: "Serbia"
    },
    role: {
      id: 1,
      name: "admin"
    },
    accounts: [
      ACCOUNTS[0], ACCOUNTS[1]
    ]
  },
];


// export class Currency{
//    id: number;
//    countryName: string;
//    currencySymbol: string;
//    worthFor: number;
//    buyingRate: number;
//    sellingRate: number;
// }
//

export const EXCHANGERATES: Currency[] = [{
  id: 1,
  countryName: "EU",
  currencySymbol: "EUR",
  worthFor: 1,
  buyingRate: 120.1826,
  sellingRate: 120.9058
}]

// export class Transaction{
//    id: number;
//    senderAccount: Account;
//    senderDescription: string;
//    receiverAccount: Account;
//    currency: Currency;
//    transactionDate: string;
//    amountTransferred: number;
// }

export const TRANSACTIONS: Transaction[] = [{
    id: 1,
    senderAccount:
      // { accountType: "transaction", accountNumber: "1231321", accountBalance: 13000},
      ACCOUNTS[0],
    senderDescription: "asdfasfd",
    receiverAccount: ACCOUNTS[1],
    currency: "eu",
    transactionDate: "12/32/4144",
    amountTransferred: 1240
  },
  {
    id: 1,
    senderAccount:
      // { accountType: "transaction", accountNumber: "1231321", accountBalance: 13000},
      ACCOUNTS[0],
    senderDescription: "asdfasfd",
    receiverAccount: ACCOUNTS[1],
    currency: "eu",
    transactionDate: "12/32/4144",
    amountTransferred: 1240
  }
]
