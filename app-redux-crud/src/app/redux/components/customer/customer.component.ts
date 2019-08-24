import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../../models/customer.model';
import { Store, select } from '@ngrx/store';
import * as customerActions from '../../state/customer.action';
import { Router } from '@angular/router';

@Component({
   selector: 'app-customer',
   templateUrl: './customer.component.html',
   styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
   customers$: Observable<Customer[]>;
   constructor(
      private router: Router,
      private store: Store<{ customers: Customer[] }>
   ) {
      this.customers$ = store.pipe(select('customer'));
      this.customers$.subscribe(res => {
         console.log(res);
      });
   }

   ngOnInit() {
      this.store.dispatch(new customerActions.LoadCustomers());
   }

   addNewCustomer() {
      this.router.navigateByUrl('customer/add-customer');
   }

}
