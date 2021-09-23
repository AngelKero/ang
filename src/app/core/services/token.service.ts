import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TokenService {

    constructor() { }

    saveToken(token: string) {
        localStorage.setItem('tokenRest', token);
    }

    getToken() {
        return localStorage.getItem('tokenRest');
    }

    hasToken() {
        return localStorage.getItem('tokenRest') ? true : false;
    }

    deleteToken() {
        localStorage.setItem('tokenRest', undefined);
    }

}
