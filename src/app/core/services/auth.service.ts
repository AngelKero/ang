import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { TokenService } from '@core/services/token.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        public angularFireAuth: AngularFireAuth,
        private http: HttpClient,
        private tokenService: TokenService
    ) {}

    createUser(email: string, password: string) {
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
    }

    login(email: string, password: string) {
        return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
    }

    logout() {
        return this.angularFireAuth.auth.signOut();
    }

    hasUser() {
        return this.angularFireAuth.authState;
    }

    loginRestAPI(email: string, password: string): Observable<string> {
        return this.http.post<{token: string}>(`${environment.url_api}/auth`, {
            email,
            password
        }).pipe(
            map(response => response.token),
            tap(token => this.tokenService.saveToken(token))
        );
    }

}
