import { BungieMembershipType } from '../';

export interface DestinyPlayer {
    iconPath: string;
    membershipType: BungieMembershipType;
    membershipId: string;
    displayName: string;
}

export function createMockDestinyPlayer(): DestinyPlayer {
    return {
        iconPath: '',
        membershipType: 0,
        membershipId: '',
        displayName: ''
    };
}