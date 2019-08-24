import { Action } from '@ngrx/store';
import { Customer } from '../models/customer.model';

export enum ActionTypes {
   LOAD_CUSTOMERS = '[LOAD CUSTOMERS] CUSTOMERS',
   LOAD_CUSTOMERS_SUCCESS = '[LOAD CUSTOMERS] Success',
   LOAD_CUSTOMERS_FAIL = '[LOAD CUSTOMERS] Fail'
}

export class LoadCustomers implements Action {
   readonly type = ActionTypes.LOAD_CUSTOMERS;
}

export class LoadCustomersSuccess implements Action {
   readonly type = ActionTypes.LOAD_CUSTOMERS_SUCCESS;
   constructor(public payload: Customer[]) { }
}

export class LoadCustomersFail implements Action {
   readonly type = ActionTypes.LOAD_CUSTOMERS_SUCCESS;
   constructor(public payload: string) { }
}
