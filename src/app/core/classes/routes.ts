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

  static readonly WomenDetail: RouteData = {
    name: 'women/detail',
    icon: 'sd-home-03',
    url: 'app-women-detail',
  };

  static readonly Kids: RouteData = {
    name: 'kids',
    icon: 'sd-home-03',
    url: 'app-kids',
  };

  static readonly KidsDetail: RouteData = {
    name: 'kids/detail',
    icon: 'sd-home-03',
    url: 'app-kids-detail',
  };

  static readonly Navratri: RouteData = {
    name: 'navratri',
    icon: 'sd-home-03',
    url: 'app-navratri',
  };

  static readonly NavratriDetail: RouteData = {
    name: 'navratri/detail',
    icon: 'sd-home-03',
    url: 'app-navratri-detail',
  };
}
