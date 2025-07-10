import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClientService } from '../HttpClient/http-client.service';
import { RouteConfig } from '../../config/route.confing';
import { ApiController } from '../../constraint/api-controller';
import { ApiMethod } from '../../constraint/api-method';
import { SessionService } from '../Session/session.service';
import { Router } from '@angular/router';
import { AppRoute } from '../../class/app-route';
import { MsalService } from '@azure/msal-angular';
import { MsalUserCreationRequest } from '../../../module/login/msal-additional-info-dialog/msal-basic-info';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private refreshTokenInProgress = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );

  _httpClientService = inject(HttpClientService);
  _routeConfig = inject(RouteConfig);
  _sessionService = inject(SessionService);
  _router = inject(Router);
  _msalService = inject(MsalService);

  constructor() {}

  refreshToken(): Observable<any> {
    if (this.refreshTokenInProgress) {
      return new Observable((observer) => {
        this.refreshTokenSubject.subscribe({
          next: (token: string) => {
            if (token) {
              observer.next(token);
              observer.complete();
            }
          },
        });
      });
    } else {
      this.refreshTokenInProgress = true;
      this.refreshTokenSubject.next(null);

      return this._httpClientService
        .authPost(
          this._routeConfig.Url(
            `${ApiController.Auth}/${ApiMethod.Token}/${ApiMethod.Refresh}`
          ),
          {
            RefreshToken: this._sessionService.getRefresh(),
          }
        )
        .pipe(
          tap((tokens: { accessToken: string; refreshToken: string }) => {
            this._sessionService.setAccess(tokens.accessToken);
            this._sessionService.setAccess(tokens.refreshToken);
            this.refreshTokenInProgress = false;
            this.refreshTokenSubject.next(tokens.accessToken);
          }),
          catchError((error) => {
            this.refreshTokenInProgress = false;
            this.logout();
            return throwError(() => error);
          })
        );
    }
  }

  logout(): void {
    // if (this.isMicrosoftLoggedIn()) {
    //   this._msalService.logout();
    // }
    this._sessionService.clearLocalStorage();
    this._router.navigate([`${AppRoute.Login}`]);
  }

  // isMicrosoftLoggedIn(): boolean {
  //   return this._msalService.instance.getAllAccounts().length > 0;
  // }

  loginWithMicrosoft(): Observable<any> {
    return from(this._msalService.loginPopup()).pipe(
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  checkUserExistanceFromMsal(msToken: string): Observable<any> {
    return this._httpClientService.post(
      this._routeConfig.Url(
        `${ApiController.Auth}/${ApiMethod.MsalToken}/${ApiMethod.CheckUser}`
      ),
      {
        AccessToken: msToken,
      }
    );
  }

  createUserAndLoginUser(req: MsalUserCreationRequest): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('AccessToken', req.AccessToken);
    formData.append('GenderId', req.GenderId);
    formData.append('Phone1', req.Phone1);
    formData.append('Photo', req.Photo);
    formData.append('TenantId', req.TenantId);

    return this._httpClientService.authPostForm(
      this._routeConfig.Url(
        `${ApiController.Auth}/${ApiMethod.MsalToken}/${ApiMethod.CreateUser}`
      ),
      formData
    );
  }

  getTokenFromMsToken = (msToken: string) => {
    return this._httpClientService.post(
      this._routeConfig.Url(
        `${ApiController.Auth}/${ApiMethod.MsalToken}/${ApiMethod.GenerateToken}`
      ),
      {
        AccessToken: msToken,
      }
    );
  };

  getAllActiveAccountsFromMsal = () => {
    return this._msalService.instance.getAllAccounts();
  };
}
