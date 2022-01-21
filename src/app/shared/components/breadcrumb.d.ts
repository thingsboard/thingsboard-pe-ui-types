import { ActivatedRouteSnapshot, Params } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HasUUID } from '@shared/models/id/has-uuid';
export interface BreadCrumb extends HasUUID {
    label: string;
    labelFunction?: () => string;
    ignoreTranslate: boolean;
    icon: string;
    isMdiIcon: boolean;
    link: any[];
    queryParams: Params;
}
export declare type BreadCrumbLabelFunction<C> = (route: ActivatedRouteSnapshot, translate: TranslateService, component: C, data?: any) => string;
export interface BreadCrumbConfig<C> {
    labelFunction: BreadCrumbLabelFunction<C>;
    label: string;
    icon: string;
    skip: boolean;
}
