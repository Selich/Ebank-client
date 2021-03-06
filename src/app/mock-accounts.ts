import {
  Currency,
  Account,
  Client,
  Address,
  Transaction,
  Bank
} from './models';


export const BANKS: Bank[] = [
  {
    id: 1,
    pib: "12",
    bankName: "banka"
  }
]
export const ACCOUNTS: Account[] = [
  {
    id:1,
    bank:  BANKS[0],
    accountNumber: "1231321",
    accountBalance: 13000,
    availableBalance: 13300
  },
  {
    id:2,
    bank: BANKS[0],
    accountNumber: "12321",
    accountBalance: 13000,
    availableBalance: 13300
  },
  {
    id:3,
    bank:  BANKS[0],
    accountNumber: "12321",
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
export const CLIENTS: Client[] = [
  {
    id: 1,
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
  {
    id: 2,
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
  {
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

export const EXCHANGERATES: Currency[] = [
  {
  id: 1,
  countryName: "EU",
  currencySymbol: "EUR",
  worthFor: 1,
  buyingRate: 120.1826,
  sellingRate: 120.9058
 },
 {
  id: 2,
  countryName: "UK",
  currencySymbol: "GBR",
  worthFor: 1,
  buyingRate: 140.1826,
  sellingRate: 140.9058
 }
]

export const TRANSACTIONS: Transaction[] = [
  {
    senderAccount: 'asdfasdf',
    senderDescription: 'asdfasfd',
    paymentCode: '123992',
    receiverAccount: 'asdfasdf',
    currency: EXCHANGERATES[0],
    model: '92',
    referenceNumber: '1232',
    value: 1240
  }
]
