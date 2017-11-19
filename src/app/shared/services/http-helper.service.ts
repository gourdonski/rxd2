import { Inject, Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Response } from '@angular/http';

import { AsyncSubject, Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpHelperService {
    constructor(private http: Http) { }

    get<T>(url: string, options?: RequestOptionsArgs): Observable<T> {
        const method = 'get';

        return this.http
            .get(url, options)
            .catch(this.handleResponseError)
            .map(this.extractResponseJson);
    }

    private extractResponseJson(response: Response): any {
        const json = response.json();

        return typeof json.data === 'undefined' ? json : (json.data || {});
    }

    private handleResponseError(error: Response | any): Observable<any> {
        let errorMessage: string;

        if (error instanceof Response) {
            const json = error.json(),
                err = json.error || JSON.stringify(json);

            errorMessage = `${error.status} ${error.statusText || ''} - ${err}`;
        } 
        else errorMessage = error.message ? error.message : error.toString();

        return Observable.throw(errorMessage);
    }
}