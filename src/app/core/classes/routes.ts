export interface RouteData {
  name: string;
  icon: string;
  url: string;
  children?: RouteData[];
}

export class Routes {
  static readonly HOME: RouteData = {
    name: "Dashboard",
    icon: "sd-home-03",
    url: "home",
  };

  static readonly PROJECT: RouteData = {
    name: "Projects",
    icon: "sd-archive",
    url: "projects",
  };

  static readonly PROJECTLIST: RouteData = {
    name: "Projects",
    icon: "",
    url: `${Routes.PROJECT.url}/list`,
  };

  static readonly PROJECTDETAIL: RouteData = {
    name: "Projects",
    icon: "",
    url: `${Routes.PROJECT.url}/detail`,
  };

  static readonly PROJECTCREATE: RouteData = {
    name: "Create",
    icon: "",
    url: `${Routes.PROJECT.url}/create`,
  };

  static readonly BOMNESTINGFILE: RouteData = {
    name: "BOM & Nesting File",
    icon: "sd-data",
    url: `bom-and-nesting-file`,
  };

  static readonly BOMNESTINGFILELIST: RouteData = {
    name: "BOM & Nesting File",
    icon: "",
    url: `${Routes.BOMNESTINGFILE.url}/list`,
  };

  static readonly BOMNESTINGFILECREATE: RouteData = {
    name: "Create",
    icon: "",
    url: `${Routes.BOMNESTINGFILE.url}/create`,
  };

  static readonly BOMNESTINGFILEDETAIL: RouteData = {
    name: "BOM & Nesting File",
    icon: "",
    url: `${Routes.BOMNESTINGFILE.url}/detail`,
  };

  static readonly RAWMATERIAL: RouteData = {
    name: "Raw Material",
    icon: "sd-layout-alt-03",
    url: `raw-material`,
  };

  static readonly RAWMATERIALLIST: RouteData = {
    name: "Raw Material",
    icon: "",
    url: `${Routes.RAWMATERIAL.url}/list`,
  };

  static readonly RAWMATERIALCREATE: RouteData = {
    name: "Create",
    icon: "",
    url: `${Routes.RAWMATERIAL.url}/create`,
  };

  static readonly RAWMATERIALDETAIL: RouteData = {
    name: "Detail",
    icon: "",
    url: `${Routes.RAWMATERIAL.url}/detail`,
  };

  static readonly RAWMATERIALQC: RouteData = {
    name: "QC Raw Material",
    icon: "",
    url: `${Routes.RAWMATERIAL.url}/qc`,
  };

  static readonly MASTERS: RouteData = {
    name: "Masters",
    icon: "sd-grid-01",
    url: "masters",
  };

  static readonly MATERIALTYPE: RouteData = {
    name: "Material Type",
    icon: "",
    url: `${Routes.MASTERS.url}/material-type`,
  };

  static readonly MATERIALTYPELIST: RouteData = {
    name: "Material Type",
    icon: "",
    url: `${Routes.MATERIALTYPE.url}/list`,
  };

  static readonly MATERIALTYPECREATE: RouteData = {
    name: "Material Type",
    icon: "",
    url: `${Routes.MATERIALTYPE.url}/create`,
  };

  static readonly MANUFACTURES: RouteData = {
    name: "Manufactures",
    icon: "",
    url: `${Routes.MASTERS.url}/manufactures`,
  };

  static readonly MANUFACTURESLIST: RouteData = {
    name: "Manufactures",
    icon: "",
    url: `${Routes.MANUFACTURES.url}/list`,
  };

  static readonly MANUFACTURESCREATE: RouteData = {
    name: "Manufactures",
    icon: "",
    url: `${Routes.MANUFACTURES.url}/create`,
  };

  static readonly OFFERSTATUS: RouteData = {
    name: "Offer Status",
    icon: "",
    url: `${Routes.MASTERS.url}/offer-status`,
  };

  static readonly OFFERSTATUSLIST: RouteData = {
    name: "Offer Status",
    icon: "",
    url: `${Routes.OFFERSTATUS.url}/list`,
  };

  static readonly OFFERSTATUSCREATE: RouteData = {
    name: "Offer Status",
    icon: "",
    url: `${Routes.OFFERSTATUS.url}/create`,
  };

  static readonly RESULTSTATUS: RouteData = {
    name: "Result Status",
    icon: "",
    url: `${Routes.MASTERS.url}/result-status`,
  };

  static readonly RESULTSTATUSLIST: RouteData = {
    name: "Result Status",
    icon: "",
    url: `${Routes.RESULTSTATUS.url}/list`,
  };

  static readonly RESULTSTATUSCREATE: RouteData = {
    name: "Result Status",
    icon: "",
    url: `${Routes.RESULTSTATUS.url}/create`,
  };

  static readonly CUTTINGMETHOD: RouteData = {
    name: "Cutting Method",
    icon: "",
    url: `${Routes.MASTERS.url}/cutting-method`,
  };

  static readonly CUTTINGMETHODLIST: RouteData = {
    name: "Cutting Method",
    icon: "",
    url: `${Routes.CUTTINGMETHOD.url}/list`,
  };

  static readonly CUTTINGMETHODCREATE: RouteData = {
    name: "Cutting Method",
    icon: "",
    url: `${Routes.CUTTINGMETHOD.url}/create`,
  };

  static readonly DEFINESTAGES: RouteData = {
    name: "Define Stages",
    icon: "",
    url: `${Routes.MASTERS.url}/define-stages`,
  };

  static readonly DEFINESTAGESLIST: RouteData = {
    name: "Define Stages",
    icon: "",
    url: `${Routes.DEFINESTAGES.url}/list`,
  };

  static readonly DEFINESTAGESCREATE: RouteData = {
    name: "Define Stages",
    icon: "",
    url: `${Routes.DEFINESTAGES.url}/create`,
  };

  static readonly ROLE: RouteData = {
    name: "Role ",
    icon: "",
    url: `${Routes.MASTERS.url}/role`,
  };

  static readonly ROLECREATE: RouteData = {
    name: "Role ",
    icon: "",
    url: `${Routes.ROLE.url}/create`,
  };

  static readonly ROLEDETAIL: RouteData = {
    name: "Role ",
    icon: "",
    url: `${Routes.ROLE.url}/detail`,
  };

  static readonly USER: RouteData = {
    name: "User",
    icon: "sd sd-users-02",
    url: "user",
  };

  static readonly USERCREATE: RouteData = {
    name: "User ",
    icon: "",
    url: `${Routes.USER.url}/create`,
  };

  static readonly USERDETAIL: RouteData = {
    name: "User ",
    icon: "",
    url: `${Routes.USER.url}/detail`,
  };

  static readonly LOGIN: RouteData = {
    name: "LOGIN",
    icon: "sd-archive",
    url: "login",
  };

  static readonly RESETPASSWORD: RouteData = {
    name: "RESET PASSWORD",
    icon: "sd-archive",
    url: `${Routes.LOGIN.url}/reset-password`,
  };

  static readonly CALLBACK: RouteData = {
    name: "CALLBACK",
    icon: "sd-archive",
    url: `${Routes.LOGIN.url}/callback`,
  };

  static readonly ACCOUNT: RouteData = {
    name: "ACCOUNT",
    icon: "sd-archive",
    url: "account",
  };

  static readonly ACCOUNTDETAIL: RouteData = {
    name: "Account Detail",
    icon: "",
    url: `${Routes.ACCOUNT.url}/${Routes.RESETPASSWORD.url}`,
  };
}
