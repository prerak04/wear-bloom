import {
  HttpInterceptorFn,
  HttpRequest,
  HttpHandlerFn,
  HttpEvent,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthService } from '../service/auth/auth.service';
import { ApiMethod } from '../constraint/api-method';

/**
 * It intercepts all HTTP requests, and if an error occurs during the request, it checks if the error status is 401
 */
export const AuthInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const authService = inject(AuthService);

  return next(req).pipe(
    catchError((error) => {
      if (
        error.status === 401 &&
        !req.url.includes(`${ApiMethod.Token}/${ApiMethod.Refresh}`)
      ) {
        return handleUnauthorizedError(req, next, authService);
      }
      return throwError(() => error);
    })
  );
};

/**
 * handles unauthorized HTTP errors by attempting to refresh the authentication token.
 * If successful, it retries the original request with the new token.
 * If the token refresh fails, it logs out the user and redirects to the login page
 */
function handleUnauthorizedError(
  request: HttpRequest<any>,
  next: HttpHandlerFn,
  authService: AuthService
): Observable<HttpEvent<any>> {
  return authService.refreshToken().pipe(
    switchMap((token: string) => {
      return next(addToken(request, token));
    }),
    catchError((error) => {
      // If refresh token fails, logout the user and redirect to login page
      authService.logout();
      return throwError(() => error);
    })
  );
}

function addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
  return request.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });
}
