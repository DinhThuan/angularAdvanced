import { Component, OnInit } from '@angular/core';
import { Service } from '../service.service';

@Component({
  selector: 'app-acomponent',
  templateUrl: './acomponent.component.html',
  styleUrls: ['./acomponent.component.scss']
})
export class AcomponentComponent implements OnInit {

  constructor(private service: Service) { }

  ngOnInit() {
    this.service.buttonObservable.subscribe(e => {
      console.log('GET api');
    });
  }

}
