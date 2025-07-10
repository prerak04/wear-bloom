import { inject, Injectable } from "@angular/core";
import { RouteConfig } from "../../config/route.confing";
import { HttpClientService } from "../HttpClient/http-client.service";
import { ApiController } from "../../constraint/api-controller";
import { BehaviorSubject, map, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FirebaseConfigService {
  // private firebaseConfig = new BehaviorSubject<FirebaseConfig | null>(null);
  // public configState = this.firebaseConfig.asObservable();

  _httpClientService = inject(HttpClientService);
  routeConfig = inject(RouteConfig);

  constructor() {}

  // getFirebaseConfig(): Observable<ApiResponse<FirebaseConfig>> {
  //   return this._httpClientService
  //     .authGet(
  //       this.routeConfig.Url(
  //         `${ApiController.FirebaseConfig}/${ApiController.Config}`
  //       )
  //     )
  //     .pipe(
  //       map((response: ApiResponse<FirebaseConfig>) => {
  //         const config = response?.Model as unknown as FirebaseConfig;
  //         this.firebaseConfig.next(config);
  //         return response as ApiResponse<FirebaseConfig>;
  //       })
  //     );
  // }
}
