// import { CanActivateFn, Router } from "@angular/router";
// import { SessionService } from "../../service/Session/session.service";
// import { inject } from "@angular/core";
// import { Security } from "../../helper/security";
// import { Controller } from "../../classes/controller";
// import { Roles } from "../../enums/roles";

// export const roleGuard: CanActivateFn = async (route, state) => {
//   const user = inject(SessionService);
//   const router = inject(Router);
//   const userRole = await Security.decrypt(user.roleId());
//   const allowedRoleEnums = route.data["roles"] as number[];
//   const allowedRoles = allowedRoleEnums.map((r) => Roles[r]);
//   if (allowedRoles.includes(userRole)) return true;
//   else {
//     router.navigate([Controller.Home]);
//     return false;
//   }
// };
