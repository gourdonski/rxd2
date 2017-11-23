import { Inject, Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { API_ROOT_PATH, API_KEY_HEADER, API_KEY } from '../bungie-api-config';
import { BungieMembershipType, BungieResponseErrorStatus, BungieResponse, DestinyPlayer, HttpHelperService } from '../../shared';

@Injectable()
export class BungieApiService {
  private apiRequestHeader: Headers = new Headers();

  constructor(
    @Inject(API_ROOT_PATH) private readonly apiRootPath, 
    @Inject(API_KEY_HEADER) readonly apiKeyHeader, 
    @Inject(API_KEY) readonly apiKey, 
    private http: HttpHelperService) {
    this.apiRequestHeader.append(apiKeyHeader, apiKey);
  }

  public getDestinyPlayer(membershipType: BungieMembershipType | number, displayName: string): Observable<DestinyPlayer> {
    return this.http
      .get(`${this.apiRootPath}/Destiny2/SearchDestinyPlayer/${membershipType}/${displayName}`, {
        headers: this.apiRequestHeader
      })
      .take(1)
      .map((response: BungieResponse<DestinyPlayer>) => <DestinyPlayer>this.extractResponse(response));
  }

  private extractResponse<T>(response: BungieResponse<T>): T | Array<T> {
    if (this.hasSuccessResponse(response))
      return response.response.length === 1 ? response.response[0] : response.response;
  
    throw 'Received error response from Bungie';
  }

  private hasSuccessResponse<T>(response: BungieResponse<T>): boolean {
    return response.response != null && response.response.length > 0 && response.errorStatus === BungieResponseErrorStatus.Success;
  }
}
