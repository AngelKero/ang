import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import * as Sentry from '@sentry/browser';
import { retryWithDelay } from '@utils/retryWithDelay';

export class HttpErrorInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
        .pipe(
            retryWithDelay(1000, 5),
            catchError((error: HttpErrorResponse) => {
                Sentry.captureException(error);
                return throwError(error);
            })
        );
    }
}
