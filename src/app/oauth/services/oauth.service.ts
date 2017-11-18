import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class OauthService {
  constructor(private http: Http) {}
}
