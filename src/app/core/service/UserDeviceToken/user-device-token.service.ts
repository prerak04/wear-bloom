import { inject, Injectable } from '@angular/core';
import { HttpClientService } from '../HttpClient/http-client.service';
import { RouteConfig } from '../../config/route.confing';
import { ApiController } from '../../constraint/api-controller';
import { ApiMethod } from '../../constraint/api-method';
import { UserDeviceToken } from './UserDeviceToken';
import { map } from 'rxjs';
import { ApiResponse } from '../../class/response';

@Injectable({
  providedIn: 'root',
})
export class UserDeviceTokenService {
  _httpClientService = inject(HttpClientService);
  routeConfig = inject(RouteConfig);

  constructor() {}

  create(token: UserDeviceToken) {
    return this._httpClientService
      .authPost(this.routeConfig.Url(`${ApiController.UserDeviceToken}`), token)
      .pipe(
        map((response: ApiResponse<any>) => {
          return response as ApiResponse<any>;
        })
      );
  }

  update(token: string) {
    return this._httpClientService
      .authPut(
        this.routeConfig.Url(`${ApiController.UserDeviceToken}/update`),
        token
      )
      .pipe(
        map((response: ApiResponse<any>) => {
          return response as ApiResponse<any>;
        })
      );
  }
}
