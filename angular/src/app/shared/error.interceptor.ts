import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private toast:ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';
        console.log(error);
        if (error.error instanceof ErrorEvent) {
          errorMsg = `Error: ${error.error.message}`;
          this.toast.error(errorMsg, "Error", {
            positionClass: 'toast-bottom-right',
            onActivateTick: true,    
            timeOut:6000
          });
        } else {
          errorMsg = `Error Code: ${error.status} Message:${error.message}`;
          this.toast.error(errorMsg, "Server Error", {
            positionClass: 'toast-bottom-right',
            onActivateTick: true,  
            timeOut:6000
          });
        }
            
        return throwError(()=>new Error(errorMsg));
      })
    )
  }
}
