import { CellClickColumnInfo, WidgetActionDescriptor, WidgetActionSource, WidgetActionsMap, WidgetActionType } from '@app/shared/models/widget.models';
import { EntityAlias } from '@shared/models/alias.models';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { PageData } from '@shared/models/page/page-data';
import { TranslateService } from '@ngx-translate/core';
import { PageLink } from '@shared/models/page/page-link';
import { UtilsService } from '@core/services/utils.service';
export interface WidgetActionCallbacks {
    fetchDashboardStates: (query: string) => Array<string>;
    fetchCellClickColumns: () => Array<CellClickColumnInfo>;
    fetchEntityAliases?: () => Array<EntityAlias>;
}
export interface WidgetActionsData {
    actionsMap: WidgetActionsMap;
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
export declare const stripRuntimeWidgetActionFields: <T extends WidgetActionDescriptor>(action: T) => T;
export interface WidgetActionsImportResult {
    imported: number;
    skipped: number;
    columnIndexesReset: number;
}
export declare const mergeWidgetActionsMap: (targetMap: WidgetActionsMap, importedMap: WidgetActionsMap, actionSources: {
    [actionSourceId: string]: WidgetActionSource;
}, allowedActionTypes: WidgetActionType[], fetchCellClickColumnsCount: () => number) => WidgetActionsImportResult;
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
    connect(_collectionViewer: CollectionViewer): Observable<WidgetActionDescriptorInfo[] | ReadonlyArray<WidgetActionDescriptorInfo>>;
    disconnect(_collectionViewer: CollectionViewer): void;
    setActions(actionsData: WidgetActionsData): void;
    loadActions(pageLink: PageLink, reload?: boolean): Observable<PageData<WidgetActionDescriptorInfo>>;
    fetchActions(pageLink: PageLink): Observable<PageData<WidgetActionDescriptorInfo>>;
    getAllActions(): Observable<Array<WidgetActionDescriptorInfo>>;
    private toWidgetActionDescriptorInfo;
    isEmpty(): Observable<boolean>;
    total(): Observable<number>;
}
