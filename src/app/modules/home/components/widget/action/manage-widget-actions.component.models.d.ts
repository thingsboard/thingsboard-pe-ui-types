import { CellClickColumnInfo, WidgetActionDescriptor, WidgetActionSource } from '@app/shared/models/widget.models';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { PageData } from '@shared/models/page/page-data';
import { TranslateService } from '@ngx-translate/core';
import { PageLink } from '@shared/models/page/page-link';
import { UtilsService } from '@core/services/utils.service';
export interface WidgetActionCallbacks {
    fetchDashboardStates: (query: string) => Array<string>;
    fetchCellClickColumns: () => Array<CellClickColumnInfo>;
}
export interface WidgetActionsData {
    actionsMap: {
        [actionSourceId: string]: Array<WidgetActionDescriptor>;
    };
    actionSources: {
        [actionSourceId: string]: WidgetActionSource;
    };
}
export interface WidgetActionDescriptorInfo extends WidgetActionDescriptor {
    actionSourceId?: string;
    actionSourceName?: string;
    typeName?: string;
}
export declare const toWidgetActionDescriptor: (action: WidgetActionDescriptorInfo) => WidgetActionDescriptor;
export declare class WidgetActionsDatasource implements DataSource<WidgetActionDescriptorInfo> {
    private translate;
    private utils;
    private actionsSubject;
    private pageDataSubject;
    pageData$: Observable<PageData<WidgetActionDescriptorInfo>>;
    private allActions;
    private actionsMap;
    private actionSources;
    constructor(translate: TranslateService, utils: UtilsService);
    connect(collectionViewer: CollectionViewer): Observable<WidgetActionDescriptorInfo[] | ReadonlyArray<WidgetActionDescriptorInfo>>;
    disconnect(collectionViewer: CollectionViewer): void;
    setActions(actionsData: WidgetActionsData): void;
    loadActions(pageLink: PageLink, reload?: boolean): Observable<PageData<WidgetActionDescriptorInfo>>;
    fetchActions(pageLink: PageLink): Observable<PageData<WidgetActionDescriptorInfo>>;
    getAllActions(): Observable<Array<WidgetActionDescriptorInfo>>;
    private toWidgetActionDescriptorInfo;
    isEmpty(): Observable<boolean>;
    total(): Observable<number>;
}
