import { Injectable, inject } from '@angular/core';
import { HttpClientService } from '../HttpClient/http-client.service';
import { Observable, map } from 'rxjs';
import { ApiResponse } from '../../class/response';
import { RouteConfig } from '../../config/route.confing';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  _httpClientService = inject(HttpClientService);
  routeConfig = inject(RouteConfig);

  get = (url: string): Observable<ApiResponse<any>> => {
    return this._httpClientService.get(this.routeConfig.Url(`${url}`)).pipe(
      map((response: any) => {
        return response as ApiResponse<any>;
      })
    );
  };
}
