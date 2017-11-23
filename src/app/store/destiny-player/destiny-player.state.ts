import { DestinyPlayer } from '../../shared';

export interface DestinyPlayerState {
    destinyPlayer: DestinyPlayer;
    isSearching?: boolean;
}

export const initialDestinyPlayerState: DestinyPlayerState = {
    destinyPlayer: {
        iconPath: '',
        membershipType: 0,
        membershipId: '',
        displayName: ''
    }
}