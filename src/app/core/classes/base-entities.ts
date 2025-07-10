export interface IBaseEntities {
  Id: number;
  Uid: string;
  IsDelete: boolean;
  CreatedBy: string;
  CreatedOn: Date;
  UpdatedBy: string;
  UpdatedOn: Date;
  DeletedBy: string;
  DeletedOn: Date;
}

export class BaseEntities implements IBaseEntities {
  Id: number;
  Uid: string;
  IsDelete: boolean;
  CreatedBy: string;
  CreatedOn: Date;
  UpdatedBy: string;
  UpdatedOn: Date;
  DeletedBy: string;
  DeletedOn: Date;
}
