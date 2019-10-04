import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class DatasetsResolverService implements Resolve<any[]> {
    constructor(private http: HttpClient) {
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {
        const url = 'http://5d96dfa09937f40014b6826f.mockapi.io/datasets';
        // const url = 'http://13.232.174.92:8000/datasets/'
        const httpOptions = {
            headers: new HttpHeaders({
                'content-Type': 'application/json',
            })
        }
        return this.http.get(url, httpOptions).pipe(catchError(error => {
            return EMPTY;
        }));
    }
}
