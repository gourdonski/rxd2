import { BungieMembershipType } from '../';

export interface DestinyPlayer {
    response: Array<{
        iconPath: string;
        membershipType: BungieMembershipType;
        membershipId: string;
        displayName: string;
    }>,
    errorCode: number;
    throttleSeconds: number;
    errorStatus: string;
    message: string;
    messageData: {};
}