import { inject, Injectable } from "@angular/core";
import { SessionService } from "../Session/session.service";
import { BehaviorSubject, map } from "rxjs";
import { IUser } from "../../../modules/user/user";
import { Roles } from "../../enums/roles";
import { Security } from "../../helper/security";
import { UserService } from "../../../modules/user/user.service";
import { ApiResponseUtility } from "../../classes/api-response";

@Injectable({
  providedIn: "root",
})
export class GlobalMasterService {
  _sessionService = inject(SessionService);
  _userService = inject(UserService);
  //#region Global User Info
  public User$ = new BehaviorSubject<IUser | null>(null);

  get getUser() {
    return this.User$.asObservable();
  }

  // async loadUser(infoId: string) {
  //   if (
  //     Roles.Admin.toString() ==
  //     (await Security.decrypt(this._sessionService.roleId()))
  //   ) {
  //     this._userService
  //       .getById(infoId)
  //       .pipe(
  //         map((data) => this.User$.next(ApiResponseUtility.getEntity(data)))
  //       )
  //       .subscribe();
  //   }
  // }
  //#endregion
}
