import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormCustomerComponent } from './components/form-customer/form-customer.component';

const routes: Routes = [
   {
      path: 'customer/add-customer',
      component: FormCustomerComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class ReduxRoutingModule { }
