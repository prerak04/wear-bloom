// import { Injectable, inject } from "@angular/core";
// import { HttpClientService } from "../HttpClient/http-client.service";
// import { Observable, map } from "rxjs";
// import { RouteConfig } from "../../config/route.confing";
// import { ApiController } from "../../constraint/api-controller";
// import { ApiMethod } from "../../constraint/api-method";
// import { ApiResponse } from "../../classes/api-response";

// @Injectable({
//   providedIn: "root",
// })
// export class UserService {
//   _httpClientService = inject(HttpClientService);
//   routeConfig = inject(RouteConfig);

//   getDetail() {
//     return this._httpClientService
//       .authGet(
//         this.routeConfig.Url(`${ApiController.User}/${ApiMethod.Detail}`)
//       )
//       .pipe(
//         map((response: ApiResponse<any>) => {
//           return response as ApiResponse<any>;
//         })
//       );
//   }
// }
