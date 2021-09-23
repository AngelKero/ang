import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '@core/services/token.service';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(
        private tokenService: TokenService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = this.addToken(request);
        return next.handle(request);
    }

    private addToken(request: HttpRequest<any>): HttpRequest<any> {
        if (this.tokenService.hasToken()) {
            request = request.clone({
                setHeaders: {
                    token: this.tokenService.getToken()
                }
            });
            return request;
        }
        return request;
    }

}
