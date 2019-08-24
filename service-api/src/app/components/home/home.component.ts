import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/entities/Student.class';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
    public subscription: Subscription;
    public students: Student[] = [];
    constructor(public _service: CommonService) { }

    getAll() {
        this.subscription = this._service.getAll("information_student").subscribe(data => {
            this.students = data;
            console.log(this.students);
        }, error => {
            console.log(error);
        });
    }

    ngOnInit() {
        this.getAll();
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

}
