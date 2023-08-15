import { ActivatedRouteSnapshot, Params } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UtilsService } from '@core/services/utils.service';
import { HasUUID } from '@shared/models/id/has-uuid';
export interface BreadCrumb extends HasUUID {
    label: string;
    labelFunction?: () => string;
    ignoreTranslate: boolean;
    icon: string;
    iconUrl: string;
    link: any[];
    queryParams: Params;
}
export type BreadCrumbLabelFunction<C> = (route: ActivatedRouteSnapshot, translate: TranslateService, component: C, data?: any, utils?: UtilsService) => string;
export interface BreadCrumbConfig<C> {
    labelFunction: BreadCrumbLabelFunction<C>;
    label: string;
    icon: string;
    skip: boolean;
    custom: boolean;
    customChild: boolean;
}
