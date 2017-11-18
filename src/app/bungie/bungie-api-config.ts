import { InjectionToken } from '@angular/core';

export const API_ROOT_PATH = new InjectionToken<string>('https://www.bungie.net/Platform');

export const API_KEY_HEADER = new InjectionToken<string>('X-API-Key');

export const API_KEY = new InjectionToken<string>('47a8d16604fb41ec8a45bb4d6d25bdfe');