import { Inject, Injectable } from "@angular/core";
import { HttpClientService } from "../HttpClient/http-client.service";
import {
  BaseServiceCallbackConfig,
  ServiceConfig,
} from "../../base-component/base-service-callback";
import { RouteConfig } from "../../config/route.confing";
import { ApiController } from "../../constraint/api-controller";
import { ApiResponse, ApiResponseUtility } from "../../classes/api-response";
import { map, Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class BaseService<T, TFilter, TResult> extends BaseServiceCallbackConfig<
  T,
  TFilter
> {
  private httpClient: HttpClientService;

  constructor(
    public _httpClientService: HttpClientService,
    public routeConfig: RouteConfig,
    @Inject("controller") private controller: string
  ) {
    super();
    this.httpClient = _httpClientService;
  }

  setConfig(config: ServiceConfig) {
    this.config = config;
    if (config.canHandleMasterData) {
      this.master.loadMaster = this.getMasterField;
      this.master.loadMaster(this.config.filter as TFilter);
      this.master.value = this.value;
    }
    if (config.canHandleMapper) this.master.find = this.find;
  }

  getMasterField = (filter: TFilter) => {
    this._httpClientService
      .authPost(
        this.routeConfig.Url(`${this.controller}/${ApiController.List}`),
        filter
      )
      .pipe(
        map((response: ApiResponse<TResult>) => {
          const entities: T[] = ApiResponseUtility.getRecords(response);
          this.observable$.next(entities?.sort(this.sortAlhpabetically));
          if (this.config?.canHandleMapper)
            entities?.map((i) => this.mapObservable.set(i["Uid"], i));
        })
      )
      .subscribe();
  };

  getAll(filter: TFilter): Observable<ApiResponse<TResult>> {
    return this._httpClientService
      .authPost(
        this.routeConfig.Url(`${this.controller}/${ApiController.List}`),
        filter
      )
      .pipe(
        map((response: ApiResponse<TResult>) => {
          this.onPostGetAll(response as ApiResponse<any>);
          const entities: TResult[] = ApiResponseUtility.getRecords(response);
          if (response.Model?.PagedResult) {
            response.Model.PagedResult.Results = entities.sort(
              this.sortAlhpabetically
            );
          }
          return response as ApiResponse<TResult>;
        })
      );
  }

  getById(uid: string) {
    return this._httpClientService
      .authGet(this.routeConfig.Url(`${this.controller}/${uid}`))
      .pipe(
        map((response: ApiResponse<TResult>) => {
          this.onPostGetById();
          return response as ApiResponse<TResult>;
        })
      );
  }

  create(data: T) {
    return this._httpClientService
      .authPost(this.routeConfig.Url(`${this.controller}`), data)
      .pipe(
        map((response: ApiResponse<TResult>) => {
          this.onPostCreate();
          if (this.config?.reloadOnCreate && this.config?.canHandleMasterData) {
            this.master.loadMaster(this.config?.filter as TFilter);
          }
          return response as ApiResponse<TResult>;
        })
      );
  }

  createForm(data: FormData) {
    return this._httpClientService
      .authPostForm(this.routeConfig.Url(`${this.controller}`), data)
      .pipe(
        map((response: ApiResponse<TResult>) => {
          this.onPostCreate();
          if (this.config?.reloadOnCreate && this.config?.canHandleMasterData) {
            this.master.loadMaster(this.config?.filter as TFilter);
          }
          return response as ApiResponse<TResult>;
        })
      );
  }

  update(data: T, uid: string) {
    return this._httpClientService
      .authPut(this.routeConfig.Url(`${this.controller}/${uid}`), data)
      .pipe(
        map((response: ApiResponse<TResult>) => {
          this.onPostUpdate();
          if (this.config?.reloadOnEdit && this.config?.canHandleMasterData) {
            this.master.loadMaster(this.config?.filter as TFilter);
          }
          return response as ApiResponse<TResult>;
        })
      );
  }

  updateForm(data: FormData, uid: string) {
    return this._httpClientService
      .authPutForm(this.routeConfig.Url(`${this.controller}/${uid}`), data)
      .pipe(
        map((response: ApiResponse<TResult>) => {
          this.onPostUpdate();
          if (this.config?.reloadOnEdit && this.config?.canHandleMasterData) {
            this.master.loadMaster(this.config?.filter as TFilter);
          }
          return response as ApiResponse<TResult>;
        })
      );
  }

  delete(uid: string) {
    return this._httpClientService
      .authDelete(this.routeConfig.Url(`${this.controller}/${uid}`))
      .pipe(
        map((response: ApiResponse<TResult>) => {
          this.onPostDelete();
          if (this.config?.reloadOnDelete && this.config?.canHandleMasterData) {
            this.master.loadMaster(this.config?.filter as TFilter);
          }
          return response as ApiResponse<TResult>;
        })
      );
  }

  /**
   * sorts data alphabetically
   * @returns boolean for sort function
   */
  sortAlhpabetically = (a, b) => {
    const name1 = (a["FirstName"] ?? a["Name"])?.toLowerCase();
    const name2 = (b["FirstName"] ?? b["Name"])?.toLowerCase();

    if (name1 < name2) return -1;
    if (name1 > name2) return 1;
    return 0;
  };
}
