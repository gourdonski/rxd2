export interface BungieResponse<T> {
    ErrorCode: number;
    ErrorStatus: string;
    Message: string;
    MessageData: {};
    Response: Array<T>;
    ThrottleSeconds: number;
}