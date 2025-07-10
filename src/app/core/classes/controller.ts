export const Controller = {
  // app endpoints
  Login: "login",
  School: "school",
  Master: "master",
  Id: ":id",

  // Users
  MasterAdmin: "master-admin",
  Admin: "admin",
  User: "user",

  Home: "home",

  //Users sub-options endpoints
  List: "list",
} as const;

export type TController = (typeof Controller)[keyof typeof Controller];

/**
 * converts string of array into a path.
 * @example ('get','route') => get/route
 */
export function getRoute(...items: string[]) {
  return items.join("/");
}
