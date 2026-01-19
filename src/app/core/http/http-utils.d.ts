import { InterceptorHttpParams } from '../interceptors/interceptor-http-params';
import { HttpHeaders } from '@angular/common/http';
export type QueryParams = {
    [param: string]: any;
};
export interface RequestConfig {
    ignoreLoading?: boolean;
    ignoreErrors?: boolean;
    resendRequest?: boolean;
    queryParams?: QueryParams;
    loadEntityDetails?: boolean;
}
export declare function hasRequestConfig(config?: any): boolean;
export declare function createDefaultHttpOptions(queryParamsOrConfig?: QueryParams | RequestConfig, config?: RequestConfig): {
    headers: HttpHeaders;
    params: InterceptorHttpParams;
};
export declare function defaultHttpOptionsFromParams(queryParams?: QueryParams, config?: RequestConfig): {
    headers: HttpHeaders;
    params: InterceptorHttpParams;
};
export declare function defaultHttpOptionsFromConfig(config?: RequestConfig): {
    headers: HttpHeaders;
    params: InterceptorHttpParams;
};
export declare function defaultHttpOptions(ignoreLoading?: boolean, ignoreErrors?: boolean, resendRequest?: boolean, queryParams?: QueryParams): {
    headers: HttpHeaders;
    params: InterceptorHttpParams;
};
export declare function defaultHttpUploadOptions(ignoreLoading?: boolean, ignoreErrors?: boolean, resendRequest?: boolean, queryParams?: QueryParams): {
    params: InterceptorHttpParams;
};
