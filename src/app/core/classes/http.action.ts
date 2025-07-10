import { catchError, Observable, take } from "rxjs";
import { Result } from "../helper/result";
import { BaseComponent } from "../base-component/base-component";

export class HttpAction<T> extends BaseComponent {
  data: T | undefined;
  hasError = false;
  private action$: Observable<T> | undefined;

  /**
   *
   * @param action$ will return value API
   */
  execute(
    action$: Observable<T>,
    showSuccessMessage?: string | boolean,
    showErrorMessage?: string | boolean
  ): Promise<T | undefined> {
    return new Promise((resolve, reject) => {
      this.isLoading = true;
      this.hasError = false;
      this.action$ = action$;
      this.action$
        .pipe(
          take(1),
          catchError((error) => {
            if (showErrorMessage) this.showError(error?.error?.Message);
            this.data = undefined;

            this.isLoading = false;
            this.hasError = true;

            reject(error?.error);
            return [];
          })
        )
        .subscribe((data: T) => {
          if (!data[Result.IsSuccess]) this.showError(data[Result.Message]);

          if (showSuccessMessage === true) {
            this.showSuccess(data[Result.Message]);
          }
          if (typeof showSuccessMessage == "string") {
            this.showSuccess(showSuccessMessage);
          }

          this.data = data;
          this.isLoading = false;
          this.hasError = false;

          resolve(this.data);
        });
    });
  }
}
