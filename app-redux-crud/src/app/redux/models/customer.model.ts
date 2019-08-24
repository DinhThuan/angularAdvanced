export interface ICustomer {
   id: number;
   name: string;
   phone: string;
   address: string;
   membership: string;

}

export class Customer implements ICustomer {
   id: number;
   name: string;
   phone: string;
   address: string;
   membership: string;
}
