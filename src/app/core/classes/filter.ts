import { SortDirections } from "../enums/sort-directions";

export class Filter {
  public PageSize: number;
  public Page: number;
  public Query: string;
  public OrderBy: SortDirections;
  public OrderByColumn: string;
  public Uid: string;
}
