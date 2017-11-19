export interface BungieResponse<T> {
    response: Array<T>,
    errorCode: number;
    throttleSeconds: number;
    errorStatus: string;
    message: string;
    messageData: {};
}