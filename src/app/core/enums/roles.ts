export const Roles = {
  MasterAdmin: "MasterAdmin",
  Admin: "Admin",
  User: "User",
} as const;

export type TRole = (typeof Roles)[keyof typeof Roles];
