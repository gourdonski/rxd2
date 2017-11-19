import { BungieMembershipType } from '../';

export interface PlayerSearch {
    displayName: string;
    membershipType: string | number | BungieMembershipType;
}

export class PlayerSearch implements PlayerSearch {
    constructor(public displayName: string, public membershipType: string | number | BungieMembershipType) { }
}