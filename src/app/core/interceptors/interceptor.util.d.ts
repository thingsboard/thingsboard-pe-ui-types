import { HttpRequest } from '@angular/common/http';
import { InterceptorConfig } from '@core/interceptors/interceptor-config';
export declare const getInterceptorConfig: (req: HttpRequest<unknown>) => InterceptorConfig;
