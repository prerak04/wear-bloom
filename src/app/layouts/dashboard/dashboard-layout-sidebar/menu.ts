import { Routes } from '../../../core/classes/routes';
import { Roles, TRole } from '../../../core/enums/roles';

export interface ISubMenuItem {
  label: string;
  link: string;
  Role: TRole[];
}

export type IMenuItem =
  | {
      label: string;
      icon: string;
      link: string;
      isOpen: boolean;
      Role: TRole[];
      subMenu?: never;
    }
  | {
      label: string;
      icon: string;
      subMenu: ISubMenuItem[];
      isOpen: boolean;
      Role: TRole[];
      link?: never;
    };

// --- Menu Class ---
export class Menu {
  menuItems: IMenuItem[] = [
    {
      label: Routes.HOME.name,
      icon: Routes.HOME.icon,
      link: Routes.HOME.url,
      isOpen: false,
      Role: [Roles.MasterAdmin, Roles.Admin],
    },
    {
      label: Routes.CATEGORY.name,
      icon: Routes.CATEGORY.icon,
      link: Routes.CATEGORY.url,
      isOpen: false,
      Role: [],
    },
  ];
}
