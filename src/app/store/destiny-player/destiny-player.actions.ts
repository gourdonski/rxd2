import { Action } from '@ngrx/store';

import { DestinyPlayerState } from '.';
import { DestinyPlayer, PlayerSearch } from '../../shared';

export const SEARCH = '[DestinyPlayer] Search';
export const SEARCH_COMPLETE = '[DestinyPlayer] Search Complete';
export const SEARCH_FAILED = '[DestinyPlayer] Search Failed';

export class SearchAction implements Action {
    readonly type = SEARCH;

    constructor(public payload: PlayerSearch) { }
}

export class SearchCompleteAction implements Action {
    readonly type = SEARCH_COMPLETE;

    constructor(public payload: DestinyPlayer) { }
}

export class SearchFailedAction implements Action {
    readonly type = SEARCH_FAILED;

    constructor(public payload: string) { }
}

export type DestinyPlayerActions = SearchAction | SearchCompleteAction | SearchFailedAction;
