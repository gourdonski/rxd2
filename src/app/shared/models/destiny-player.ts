import { BungieMembershipType } from '../';

export interface DestinyPlayer {
    iconPath: string;
    membershipType: BungieMembershipType;
    membershipId: string;
    displayName: string;
}