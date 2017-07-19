export class Client {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  jmbg: string;
  address : Address;
}

export class Account{
  accountType: string;
  accountNumber: string;
  accountBalance: number;
  // availableBalance: number;
}

export class Address{
  street : string;
  city : string;
  country: string;
}


export class Transaction{
   id: number;
   senderAccount: Account;
   senderDescription: string;
   receiverAccount: Account;
   currency: string;
   transactionDate: string;
   amountTransferred: number;
}

export class Currency{

}
