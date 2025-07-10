import { IBaseEntities } from '../../class/Base-Entities';

export interface UserDeviceToken extends IBaseEntities {
  UserId: string;
  DeviceToken: string;
  Devicetype: Devicetype;
}

export enum Devicetype {
  Android = 'AND',
  IOS = 'IOS',
  Mac = 'MAC',
  Windows = 'WIN',
}
