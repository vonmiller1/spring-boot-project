import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HelloService {

    constructor(private _http: Http) {}

    getTest(): Observable<any> {
        return this._http.get('http://localhost:8080/test/get/json')
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.error('Failed to load test JSON from backend', error);
                return Observable.throw(error);
            });
    }
}
