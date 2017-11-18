import { Inject, Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Response } from '@angular/http';

import { AsyncSubject, Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpHelperService {
    constructor(private http: Http) { }

    /**
     * Returns a stream with the response from an HTTP GET request.
     * @param {string} url - Url to fetch.
     * @returns {Observable<fetch>} The resulting stream of an HTTP GET request
    */
    get<T>(url: string, options?: RequestOptionsArgs): Observable<T> {
        const method = 'get';

        return this.http
            .get(url, options)
            .catch(this.handleResponseError)
            .map(this.getResponseJson);
    }

    //These are based on the doc: https://angular.io/docs/ts/latest/guide/server-communication.html
    private getResponseJson(response: Response): any {
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