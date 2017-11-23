export interface SelectOption {
    name: string;
    value: any;
}

export class SelectOption implements SelectOption {
    constructor(public name: string, public value: any) {}
}