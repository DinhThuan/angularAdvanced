import { Component, OnInit } from '@angular/core';
import { Service } from '../service.service';

@Component({
   selector: 'app-bcomponent',
   templateUrl: './bcomponent.component.html',
   styleUrls: ['./bcomponent.component.scss']
})
export class BcomponentComponent implements OnInit {

   constructor(private service: Service) { }

   ngOnInit() {
   }
   handleButtonClick(e) {
      this.service.buttonSubject.next(e);
   }
}
