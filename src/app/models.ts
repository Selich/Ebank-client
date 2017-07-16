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
}

export class Address{
  street : string;
  city : string;
  country: string;
}
