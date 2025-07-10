export enum Result {
  IsSuccess = 'IsSuccess',
  StatusCode = 'StatusCode',
  StatusMessage = 'StatusMessage',
  Message = 'Message',
  Model = 'Model',
}

export enum SortDirection {
  DESC,
  ASC,
}

export class Sorting {
  SortDirection: SortDirection = SortDirection.DESC;
  SortField!: string;
}
