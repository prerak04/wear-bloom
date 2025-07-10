import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { SessionService } from "../../service/Session/session.service";
import { Controller } from "../../classes/controller";

export const authGuard: CanActivateFn = (route, state) => {
  let user = inject(SessionService);
  let router = inject(Router);
  if (user.isAuthenticated()) return true;
  else {
    router.navigate([Controller.Login]);
    return false;
  }
};
