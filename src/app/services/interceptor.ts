import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest
} from '@angular/common/http';

// @Injectable()
// export class HeaderInterceptror implements HttpInterceptor {
    // intercept(
    //     req: HttpRequest<any>,
    //     next: HttpHandler
    // ): Observable<HttpEvent<any>> {
    //     const clonedReq = req.clone({
    //         headers: req.headers.set(
    //             'Authorization', 'Basic dGVzdHVzZXI6dGVzdHBhc3M='
    //         )
    //     });
    //     return next.handle(clonedReq);
    // }
// }
