import { Injectable } from '@angular/core';

import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';

import * as actions from './destiny-player.actions';
import { HelperService, PlayerSearch } from '../../shared'; 
import { BungieApiService } from '../../bungie';

//Todo: move this to a config file.
const SEARCH_DEBOUNCE_TIME = 300;

@Injectable()
export class DestinyPlayerEffects {
    constructor(private actions$: Actions, private apiService: BungieApiService, private helper: HelperService) { }

    @Effect()
    search$: Observable<Action> = this.actions$
        .ofType(actions.SEARCH)
        .debounceTime(SEARCH_DEBOUNCE_TIME)
        .map(toPayload)
        .switchMap((search: PlayerSearch) => {
            if (!this.helper.hasValue(search)) return empty();

            const nextSearch$ = this.actions$
                .ofType(actions.SEARCH)
                .skip(1);

            return this.apiService
                .getDestinyPlayer(Number(search.membershipType), search.displayName)
                .takeUntil(nextSearch$)
                .map(player => new actions.SearchCompleteAction(player))
                .catch(err => of(new actions.SearchFailedAction(err)));
        });
}