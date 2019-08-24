import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Customer } from '../models/customer.model';
import { Action } from '@ngrx/store';
import { CustomerService } from '../customer.service';
import * as actionTypes from '../state/customer.action';
import { map, mergeMap, catchError } from 'rxjs/operators';

@Injectable()
export class CustomerEffect {

   constructor(
      private actions$: Actions,
      private customerService: CustomerService
   ) { }

   @Effect()
   loadCustomers$: Observable<Action> = this.actions$.pipe(
      ofType<actionTypes.LoadCustomers>(
         actionTypes.ActionTypes.LOAD_CUSTOMERS
      ),
      mergeMap((action: actionTypes.LoadCustomers) =>
         this.customerService.getCustomers().pipe(
            map(
               (customers: Customer[]) =>
                  new actionTypes.LoadCustomersSuccess(customers)
            ),
            catchError(err => of(new actionTypes.LoadCustomersFail(err)))
         )
      )
   );
}
