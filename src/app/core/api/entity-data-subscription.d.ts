import { ComparisonResultType, DatasourceType, widgetType } from '@shared/models/widget.models';
import { AggregationType, ComparisonDuration, SubscriptionTimewindow } from '@shared/models/time/time.models';
import { AlarmFilter, EntityDataPageLink, EntityFilter, KeyFilter } from '@shared/models/query/query.models';
import { DataKeyType } from '@shared/models/telemetry/telemetry.models';
import { UtilsService } from '@core/services/utils.service';
import { EntityDataListener, EntityDataLoadResult } from '@core/api/entity-data.service';
import { Observable } from 'rxjs';
import { TelemetryWebsocketService } from '@core/ws/telemetry-websocket.service';
import { CompiledTbFunction, TbFunction } from '@shared/models/js-function.models';
import { HttpClient } from '@angular/common/http';
declare type DataKeyFunction = (time: number, prevValue: any) => any;
declare type DataKeyPostFunction = (time: number, value: any, prevValue: any, timePrev: number, prevOrigValue: any) => any;
export interface SubscriptionDataKey {
    name: string;
    type: DataKeyType;
    aggregationType?: AggregationType;
    comparisonEnabled?: boolean;
    timeForComparison?: ComparisonDuration;
    comparisonCustomIntervalValue?: number;
    comparisonResultType?: ComparisonResultType;
    funcBody: TbFunction;
    func?: CompiledTbFunction<DataKeyFunction>;
    postFuncBody: TbFunction;
    postFunc?: CompiledTbFunction<DataKeyPostFunction>;
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
    alarmFilter?: AlarmFilter;
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
    private http;
    constructor(listener: EntityDataListener, telemetryService: TelemetryWebsocketService, utils: UtilsService, http: HttpClient);
    private entityDataSubscriptionOptions;
    private datasourceType;
    private history;
    private isFloatingTimewindow;
    private realtime;
    private subscriber;
    private dataCommand;
    private subsCommand;
    private countCommand;
    private alarmCountCommand;
    private attrFields;
    private tsFields;
    private latestValues;
    private aggTsValues;
    private aggTsComparisonValues;
    private subscribeSubscription;
    private entityDataResolveSubject;
    private pageData;
    private prematureUpdates;
    private data;
    private subsTw;
    private latestTsOffset;
    private dataAggregators;
    private tsLatestDataAggregators;
    private dataKeys;
    private dataKeysList;
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
    private static convertValue;
    private static calculateComparisonValue;
    private initializeSubscription;
    unsubscribe(): void;
    subscribe(): Observable<EntityDataLoadResult>;
    start(): void;
    private prepareSubscriptionTimewindow;
    private prepareSubscriptionCommands;
    private startFunction;
    private prepareData;
    private reportNotSupported;
    private resetData;
    private onPageData;
    private onDataUpdate;
    private notifyListener;
    private processEntityData;
    private onData;
    private onIndexedData;
    private onKeyData;
    private toSubscriptionData;
    private createRealtimeDataAggregator;
    private dataKeyByIndex;
    private timeseriesDataKeysByKeyNames;
    private generateSeries;
    private generateLatest;
    private generateData;
    private onTimeseriesTick;
    private onLatestTick;
}
export {};
