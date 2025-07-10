import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpXsrfTokenExtractor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class XsrfInterceptor implements HttpInterceptor {

    constructor(private tokenExtractor: HttpXsrfTokenExtractor) { }

    private actions: string[] = ["POST", "PUT", "DELETE"];
    private forbiddenActions: string[] = ["HEAD", "OPTIONS"];
    private xsrfToken: string | null = null;
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = this.tokenExtractor.getToken();
        let permitted = this.findByActionName(request.method, this.actions);
        let forbidden = this.findByActionName(request.method, this.forbiddenActions);

        if (permitted !== undefined && forbidden === undefined && token !== null) {
            request = request.clone({ setHeaders: { "X-XSRF-TOKEN": token } });
        }

        return next.handle(request).pipe(
            tap(event => {
                if (event instanceof HttpResponse) {
                    const xsrfTokenHeader = event.headers.get('X-XSRF-TOKEN');
                    if (xsrfTokenHeader) {
                        this.xsrfToken = xsrfTokenHeader;
                        console.log(this.xsrfToken);
                    }
                }
            })
        );
    }

    private findByActionName(name: string, actions: string[]): string | undefined {
        return actions.find(action => action.toLocaleLowerCase() === name.toLocaleLowerCase());
    }
}
