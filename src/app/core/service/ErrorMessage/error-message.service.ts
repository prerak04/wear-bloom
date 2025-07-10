import { Injectable } from "@angular/core";
import * as data from "../../helper/error.json";

@Injectable({
  providedIn: "root",
})
export class ErrorMessageService {
  data: any = <any>data;

  error(selector: string) {
    return this.data.default[selector];
  }
}
