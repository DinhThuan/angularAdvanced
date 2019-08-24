import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReduxRoutingModule } from './redux-routing.module';
import { CustomerComponent } from './components/customer/customer.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule, Actions } from '@ngrx/effects';
import { customerReducer } from './state/customer.reducer';
import { FormCustomerComponent } from './components/form-customer/form-customer.component';
import { CustomerEffect } from './state/customer.effects';

@NgModule({
   declarations: [CustomerComponent, FormCustomerComponent],
   imports: [
      CommonModule,
      ReduxRoutingModule,
      StoreModule.forRoot({ customer: customerReducer }),
      // EffectsModule.forFeature([CustomerEffect])
   ],
   exports: [CustomerComponent]
})
export class ReduxModule { }
