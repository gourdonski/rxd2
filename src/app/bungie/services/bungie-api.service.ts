import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs';

import { API_ROOT_PATH, API_KEY_HEADER, API_KEY } from '../bungie-api-config';
import { BungieMembershipType, DestinyPlayer, HttpHelperService } from '../../shared';

@Injectable()
export class BungieApiService {
  private apiRequestHeader: Headers = new Headers();

  constructor(private http: HttpHelperService) {
    this.apiRequestHeader.append(API_KEY_HEADER.toString(), API_KEY.toString());
  }

  public getDestinyPlayer(membershipType: BungieMembershipType, displayName: string): Observable<DestinyPlayer> {
    return this.http
      .get(`${API_ROOT_PATH.toString()}/Destiny2/SearchDestinyPlayer/${membershipType}/${displayName}`, {
        headers: this.apiRequestHeader
      });
  }
}
