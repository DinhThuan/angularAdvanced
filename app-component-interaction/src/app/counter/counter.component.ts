import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Increment, Decrement, Reset } from './state/counter.actions';
@Component({
   selector: 'app-counter',
   templateUrl: './counter.component.html',
   styleUrls: ['./counter.component.scss']
})


export class CounterComponent {

   count$: Observable<number>;
   constructor(private store: Store<{ count: number }>) {
      this.count$ = store.pipe(select('dvthuan'));
   }

   increment() {
      this.store.dispatch(new Increment());
   }

   decrement() {
      this.store.dispatch(new Decrement());
   }

   reset() {
      this.store.dispatch(new Reset());
   }

}
