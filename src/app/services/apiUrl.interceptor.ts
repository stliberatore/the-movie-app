import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiRequestService } from './api-request.service';


export class ApiUrlInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<ApiRequestService>, next: HttpHandler): Observable<HttpEvent<ApiRequestService>> {

    const apiKey = 'b2750fe3b3a1de17dd2b2ab68603472e';

    if (req) {
      const clonedReq = req.clone({
        params: req.params.append('api_key', apiKey)
      });
      return next.handle(clonedReq);

    } else {
      return next.handle(req);
    }
  }

}
