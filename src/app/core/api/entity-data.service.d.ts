import { DataSetHolder, Datasource, widgetType } from '@shared/models/widget.models';
import { SubscriptionTimewindow } from '@shared/models/time/time.models';
import { EntityData, EntityDataPageLink, KeyFilter } from '@shared/models/query/query.models';
import { PageData } from '@shared/models/page/page-data';
import { TelemetryWebsocketService } from '@core/ws/telemetry-websocket.service';
import { UtilsService } from '@core/services/utils.service';
import { EntityDataSubscription, EntityDataSubscriptionOptions } from '@core/api/entity-data-subscription';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { WidgetDataGenerationOptions } from '@core/api/widget-api.models';
import * as i0 from "@angular/core";
export interface EntityDataListener {
    subscriptionType: widgetType;
    useTimewindow?: boolean;
    subscriptionTimewindow?: SubscriptionTimewindow;
    latestTsOffset?: number;
    configDatasource: Datasource;
    configDatasourceIndex: number;
    dataLoaded: (pageData: PageData<EntityData>, data: Array<Array<DataSetHolder>>, datasourceIndex: number, pageLink: EntityDataPageLink) => void;
    dataUpdated: (data: DataSetHolder, datasourceIndex: number, dataIndex: number, dataKeyIndex: number, detectChanges: boolean, isLatest: boolean) => void;
    initialPageDataChanged?: (nextPageData: PageData<EntityData>) => void;
    forceReInit?: () => void;
    updateRealtimeSubscription?: () => SubscriptionTimewindow;
    setRealtimeSubscription?: (subscriptionTimewindow: SubscriptionTimewindow) => void;
    subscriptionOptions?: EntityDataSubscriptionOptions;
    dataGenerationOptions?: WidgetDataGenerationOptions;
    subscription?: EntityDataSubscription;
}
export interface EntityDataLoadResult {
    pageData: PageData<EntityData>;
    data: Array<Array<DataSetHolder>>;
    datasourceIndex: number;
    pageLink: EntityDataPageLink;
}
export declare class EntityDataService {
    private telemetryService;
    private utils;
    private http;
    constructor(telemetryService: TelemetryWebsocketService, utils: UtilsService, http: HttpClient);
    private static isUnresolvedDatasource;
    private static toSubscriptionDataKey;
    prepareSubscription(listener: EntityDataListener, ignoreDataUpdateOnIntervalTick?: boolean): Observable<EntityDataLoadResult>;
    startSubscription(listener: EntityDataListener): void;
    subscribeForPaginatedData(listener: EntityDataListener, pageLink: EntityDataPageLink, keyFilters: KeyFilter[], ignoreDataUpdateOnIntervalTick?: boolean): Observable<EntityDataLoadResult>;
    stopSubscription(listener: EntityDataListener): void;
    private createSubscriptionOptions;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityDataService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EntityDataService>;
}
