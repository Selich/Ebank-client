export class Client {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  jmbg: string;
  address: Address;
  role: Role;
  accounts: Account[];

  public static isNull(client: Client): any {
  return  client.firstName === null &&
      client.lastName === null &&
      client.email === null &&
      client.jmbg === null &&
      client.address === null &&
      client.role === null;
  }
}

export class Role {
  id: number;
  name: string;
}

export class Account {
  id: number;
  bank: Bank;
  accountNumber: string;
  accountBalance: number;
  availableBalance: number;
}

export class Address {
  street: string;
  city: string;
  country: string;
}

export class Bank {
  bankName: string;
}


export class Transaction {
  senderAccount: Account;
  senderDescription: string;
  receiverAccount: Account;
  paymentCode: string;
  currency: Currency;
  value: number;
  model: string;
  refereceNumber: string;
}

export class Currency {
  id: number;
  countryName: string;
  currencySymbol: string;
  worthFor: number;
  buyingRate: number;
  sellingRate: number;
}
