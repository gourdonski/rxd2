import { Injectable } from '@angular/core';

@Injectable()
export class HelperService {
  constructor() { }

  public isObject(val: any): boolean {
    return val instanceof Object && val.constructor === Object;
  }

  public isArray(val: any): boolean {
    return val !== void 0 && val !== null && val instanceof Array;
  }
    
  public isUndefined(val: any): boolean {
    return val === void 0 || typeof val == 'undefined';
  }
    
  public isFunction(val: any): boolean {
    return typeof val === 'function';
  }
    
  public isString(val: any): boolean {
    return typeof val === 'string' || val instanceof String;
  }
    
  public isInteger(val: any): boolean {
    return typeof val === 'number' && val % 1 === 0;
  }
    
  public isDate(val: any): boolean {
    try {
      return val.constructor.toString().indexOf('Date') != -1;
    } catch (err) {
      return false;
    }
  }

  public hasValue(val: any): boolean {
    if (this.isObject(val)) return Object.keys(val).length > 0;
    if (this.isArray(val)) return val.length > 0;
    if (this.isUndefined(val)) return false;
    if (this.isString(val)) return val.trim().length > 0;
    return !!val;
  }

  public getEnumKeys<T>($enum: T): Array<string> {
      return Object
        .keys($enum)
        .filter(key => !isNaN(Number(key)));
  }
}