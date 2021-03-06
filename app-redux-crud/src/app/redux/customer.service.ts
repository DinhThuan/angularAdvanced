import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './models/customer.model';

@Injectable({ providedIn: 'root' })
export class CustomerService {
   private url = 'http://localhost:3000/';
   constructor(public httpClient: HttpClient) { }
   getCustomers(): Observable<Customer[]> {
      return this.httpClient.get<Customer[]>(`${this.url}customers`);
   }
}
