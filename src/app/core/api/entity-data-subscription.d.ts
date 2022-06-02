import { DatasourceType, widgetType } from '@shared/models/widget.models';
import { SubscriptionTimewindow } from '@shared/models/time/time.models';
import { EntityDataPageLink, EntityFilter, KeyFilter } from '@shared/models/query/query.models';
import { DataKeyType, TelemetryService } from '@shared/models/telemetry/telemetry.models';
import { UtilsService } from '@core/services/utils.service';
import { EntityDataListener, EntityDataLoadResult } from '@core/api/entity-data.service';
import { Observable } from 'rxjs';
declare type DataKeyFunction = (time: number, prevValue: any) => any;
declare type DataKeyPostFunction = (time: number, value: any, prevValue: any, timePrev: number, prevOrigValue: any) => any;
export interface SubscriptionDataKey {
    name: string;
    type: DataKeyType;
    funcBody: string;
    func?: DataKeyFunction;
    postFuncBody: string;
    postFunc?: DataKeyPostFunction;
    index?: number;
    listIndex?: number;
    key?: string;
    lastUpdateTime?: number;
    latest?: boolean;
}
export interface EntityDataSubscriptionOptions {
    datasourceType: DatasourceType;
    dataKeys: Array<SubscriptionDataKey>;
    type: widgetType;
    entityFilter?: EntityFilter;
    isPaginatedDataSubscription?: boolean;
    ignoreDataUpdateOnIntervalTick?: boolean;
    pageLink?: EntityDataPageLink;
    keyFilters?: Array<KeyFilter>;
    additionalKeyFilters?: Array<KeyFilter>;
    subscriptionTimewindow?: SubscriptionTimewindow;
    latestTsOffset?: number;
}
export declare class EntityDataSubscription {
    private listener;
    private telemetryService;
    private utils;
    private entityDataSubscriptionOptions;
    private datasourceType;
    private history;
    private realtime;
    private subscriber;
    private dataCommand;
    private subsCommand;
    private countCommand;
    private attrFields;
    private tsFields;
    private latestValues;
    private entityDataResolveSubject;
    private pageData;
    private subsTw;
    private latestTsOffset;
    private dataAggregators;
    private dataKeys;
    private datasourceData;
    private datasourceOrigData;
    private entityIdToDataIndex;
    private frequency;
    private latestFrequency;
    private tickScheduledTime;
    private tickElapsed;
    private timeseriesTimer;
    private latestTimer;
    private dataResolved;
    private started;
    constructor(listener: EntityDataListener, telemetryService: TelemetryService, utils: UtilsService);
    private initializeSubscription;
    unsubscribe(): void;
    subscribe(): Observable<EntityDataLoadResult>;
    start(): void;
    private prepareSubscriptionCommands;
    private startFunction;
    private prepareData;
    private resetData;
    private onPageData;
    private onDataUpdate;
    private notifyListener;
    private processEntityData;
    private onData;
    private convertValue;
    private toSubscriptionData;
    private createRealtimeDataAggregator;
    private generateSeries;
    private generateLatest;
    private generateData;
    private onTimeseriesTick;
    private onLatestTick;
}
export {};
