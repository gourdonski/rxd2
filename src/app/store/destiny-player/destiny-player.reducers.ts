import * as actions from './destiny-player.actions';
import { DestinyPlayerState, initialDestinyPlayerState } from './destiny-player.state';

export function destinyPlayerReducer(state = initialDestinyPlayerState, action: actions.DestinyPlayerActions): DestinyPlayerState {
    switch (action.type) {
        case actions.SEARCH:
            return {
                ...state,
                isSearching: true
            };

        case actions.SEARCH_COMPLETE: {
            return {
                ...state,
                destinyPlayer: action.payload,
                isSearching: false
            };
        }

        case actions.SEARCH_FAILED: {
            return {
                ...state,
                destinyPlayer: null,
                isSearching: false
            };
        }

        default: {
            return state;
        }
    }
}

