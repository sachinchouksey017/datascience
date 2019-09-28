import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
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
        // const url = 'https://5d529be23432e70014e6bb42.mockapi.io/test';
        const url = 'http://13.232.174.92:8000/datasets/'
        return this.http.get(url).pipe(catchError(error => {
            return EMPTY;
        }));
    }
}
