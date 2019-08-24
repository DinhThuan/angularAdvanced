import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable,Subscription} from 'rxjs';
import { Student } from '../entities/Student.class';


@Injectable({
    providedIn: 'root'
})
export class CommonService{
    
    public url: string = "http://5a0c2e866c25030012c335bc.mockapi.io/";
    constructor(public http:HttpClient) {
    }
    getAll(nameapi:string = ""):Observable<Student[]>{
        return this.http.get<Student[]>(this.url+nameapi);
    }
}
