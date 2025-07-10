export class ApiResponse<T> {
  IsSuccess: boolean;
  StatusCode: string;
  StatusMessage: string;
  Message: string;
  Model: Result<T>;
}

export class Result<T> {
  Entity: T;
  PagedResult: PagedResult<T>;
}

export class PagedResult<T> {
  PageSize: number;
  PageNum: number;
  TotalRecords: number;
  Results: T[];
}

export class ApiResponseUtility {
  public static getEntity(data) {
    return data.Model?.Entity;
  }

  public static getRecords(data) {
    return data.Model?.PagedResult?.Results;
  }

  public static getRecordsCount(data) {
    return data.Model?.PagedResult?.TotalRecords;
  }
}
