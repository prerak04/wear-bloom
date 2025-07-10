export interface RouteData {
  name: string;
  icon: string;
  url: string;
  children?: RouteData[];
}

export class Routes {
  static readonly HOME: RouteData = {
    name: 'Home',
    icon: 'sd-home-03',
    url: 'home',
  };

  static readonly CATEGORY: RouteData = {
    name: 'Category',
    icon: 'sd-home-03',
    url: 'category',
  };
  static readonly Men: RouteData = {
    name: 'men',
    icon: 'sd-home-03',
    url: 'app-men',
  };

  static readonly MenDetail: RouteData = {
    name: 'men/detail',
    icon: 'sd-home-03',
    url: 'app-men-detail',
  };

  static readonly Women: RouteData = {
    name: 'women',
    icon: 'sd-home-03',
    url: 'app-women',
  };

  static readonly Kids: RouteData = {
    name: 'kids',
    icon: 'sd-home-03',
    url: 'app-kids',
  };
}
