import { HttpClient } from '@angular/common/http';
import { CMAssigneeType, CMScope, CustomMenu, CustomMenuConfig, CustomMenuDeleteResult, CustomMenuInfo } from '@shared/models/custom-menu.models';
import { Observable } from 'rxjs';
import { PageLink } from '@shared/models/page/page-link';
import { RequestConfig } from '@core/http/http-utils';
import { PageData } from '@shared/models/page/page-data';
import { EntityInfoData } from '@shared/models/entity.models';
import * as i0 from "@angular/core";
export declare class CustomMenuService {
    private http;
    private customMenuConfig;
    private customMenuConfigChanged;
    customMenuConfigChanged$: Observable<CustomMenuConfig>;
    constructor(http: HttpClient);
    getCustomMenu(): CustomMenuConfig;
    loadCustomMenu(notify?: boolean): Observable<CustomMenuConfig>;
    getCustomMenuInfos(pageLink: PageLink, scope?: CMScope, assigneeType?: CMAssigneeType, config?: RequestConfig): Observable<PageData<CustomMenuInfo>>;
    getCustomMenuInfo(customMenuId: string, config?: RequestConfig): Observable<CustomMenuInfo>;
    getCustomMenuConfig(customMenuId: string, config?: RequestConfig): Observable<CustomMenuConfig>;
    getCustomMenuAssigneeList(customMenuId: string, config?: RequestConfig): Observable<Array<EntityInfoData>>;
    updateCustomMenuConfig(customMenuId: string, customMenuConfig: CustomMenuConfig, config?: RequestConfig): Observable<CustomMenu>;
    updateCustomMenuName(customMenuId: string, name: string, config?: RequestConfig): Observable<void>;
    assignCustomMenu(customMenuId: string, assigneeType: CMAssigneeType, entityIds: string[], force?: boolean, config?: RequestConfig): Observable<void>;
    saveCustomMenu(customMenuInfo: CustomMenuInfo, assignToList?: string[], force?: boolean, config?: RequestConfig): Observable<CustomMenu>;
    deleteCustomMenu(customMenuId: string, force?: boolean, config?: RequestConfig): Observable<CustomMenuDeleteResult>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomMenuService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CustomMenuService>;
}
