import { EntityType } from '@shared/models/entity-type.models';
import { AggregationType } from '../time/time.models';
import { Observable } from 'rxjs';
import { EntityId } from '@shared/models/id/entity-id';
import { NgZone } from '@angular/core';
import { AlarmData, AlarmDataQuery, EntityCountQuery, EntityData, EntityDataQuery, EntityKey, TsValue } from '@shared/models/query/query.models';
import { PageData } from '@shared/models/page/page-data';
export declare enum DataKeyType {
    timeseries = "timeseries",
    attribute = "attribute",
    function = "function",
    alarm = "alarm",
    entityField = "entityField",
    count = "count"
}
export declare enum LatestTelemetry {
    LATEST_TELEMETRY = "LATEST_TELEMETRY"
}
export declare enum AttributeScope {
    CLIENT_SCOPE = "CLIENT_SCOPE",
    SERVER_SCOPE = "SERVER_SCOPE",
    SHARED_SCOPE = "SHARED_SCOPE"
}
export declare enum TelemetryFeature {
    ATTRIBUTES = "ATTRIBUTES",
    TIMESERIES = "TIMESERIES"
}
export declare type TelemetryType = LatestTelemetry | AttributeScope;
export declare function toTelemetryType(val: string): TelemetryType;
export declare const telemetryTypeTranslations: Map<TelemetryType, string>;
export declare const isClientSideTelemetryType: Map<TelemetryType, boolean>;
export interface AttributeData {
    lastUpdateTs?: number;
    key: string;
    value: any;
}
export interface TimeseriesData {
    [key: string]: Array<TsValue>;
}
export declare enum DataSortOrder {
    ASC = "ASC",
    DESC = "DESC"
}
export interface WebsocketCmd {
    cmdId: number;
}
export interface TelemetryPluginCmd extends WebsocketCmd {
    keys: string;
}
export declare abstract class SubscriptionCmd implements TelemetryPluginCmd {
    cmdId: number;
    keys: string;
    entityType: EntityType;
    entityId: string;
    scope?: AttributeScope;
    unsubscribe: boolean;
    abstract getType(): TelemetryFeature;
}
export declare class AttributesSubscriptionCmd extends SubscriptionCmd {
    getType(): TelemetryFeature;
}
export declare class TimeseriesSubscriptionCmd extends SubscriptionCmd {
    startTs: number;
    timeWindow: number;
    interval: number;
    limit: number;
    agg: AggregationType;
    getType(): TelemetryFeature;
}
export declare class GetHistoryCmd implements TelemetryPluginCmd {
    cmdId: number;
    keys: string;
    entityType: EntityType;
    entityId: string;
    startTs: number;
    endTs: number;
    interval: number;
    limit: number;
    agg: AggregationType;
}
export interface EntityHistoryCmd {
    keys: Array<string>;
    startTs: number;
    endTs: number;
    interval: number;
    limit: number;
    agg: AggregationType;
    fetchLatestPreviousPoint?: boolean;
}
export interface LatestValueCmd {
    keys: Array<EntityKey>;
}
export interface TimeSeriesCmd {
    keys: Array<string>;
    startTs: number;
    timeWindow: number;
    interval: number;
    limit: number;
    agg: AggregationType;
    fetchLatestPreviousPoint?: boolean;
}
export declare class EntityDataCmd implements WebsocketCmd {
    cmdId: number;
    query?: EntityDataQuery;
    historyCmd?: EntityHistoryCmd;
    latestCmd?: LatestValueCmd;
    tsCmd?: TimeSeriesCmd;
    isEmpty(): boolean;
}
export declare class EntityCountCmd implements WebsocketCmd {
    cmdId: number;
    query?: EntityCountQuery;
}
export declare class AlarmDataCmd implements WebsocketCmd {
    cmdId: number;
    query?: AlarmDataQuery;
    isEmpty(): boolean;
}
export declare class EntityDataUnsubscribeCmd implements WebsocketCmd {
    cmdId: number;
}
export declare class EntityCountUnsubscribeCmd implements WebsocketCmd {
    cmdId: number;
}
export declare class AlarmDataUnsubscribeCmd implements WebsocketCmd {
    cmdId: number;
}
export declare class TelemetryPluginCmdsWrapper {
    attrSubCmds: Array<AttributesSubscriptionCmd>;
    tsSubCmds: Array<TimeseriesSubscriptionCmd>;
    historyCmds: Array<GetHistoryCmd>;
    entityDataCmds: Array<EntityDataCmd>;
    entityDataUnsubscribeCmds: Array<EntityDataUnsubscribeCmd>;
    alarmDataCmds: Array<AlarmDataCmd>;
    alarmDataUnsubscribeCmds: Array<AlarmDataUnsubscribeCmd>;
    entityCountCmds: Array<EntityCountCmd>;
    entityCountUnsubscribeCmds: Array<EntityCountUnsubscribeCmd>;
    constructor();
    hasCommands(): boolean;
    clear(): void;
    preparePublishCommands(maxCommands: number): TelemetryPluginCmdsWrapper;
    private popCmds;
}
export interface SubscriptionData {
    [key: string]: [number, any][];
}
export interface SubscriptionDataHolder {
    data: SubscriptionData;
}
export interface SubscriptionUpdateMsg extends SubscriptionDataHolder {
    subscriptionId: number;
    errorCode: number;
    errorMsg: string;
}
export declare enum CmdUpdateType {
    ENTITY_DATA = "ENTITY_DATA",
    ALARM_DATA = "ALARM_DATA",
    COUNT_DATA = "COUNT_DATA"
}
export interface CmdUpdateMsg {
    cmdId: number;
    errorCode: number;
    errorMsg: string;
    cmdUpdateType: CmdUpdateType;
}
export interface DataUpdateMsg<T> extends CmdUpdateMsg {
    data?: PageData<T>;
    update?: Array<T>;
}
export interface EntityDataUpdateMsg extends DataUpdateMsg<EntityData> {
    cmdUpdateType: CmdUpdateType.ENTITY_DATA;
}
export interface AlarmDataUpdateMsg extends DataUpdateMsg<AlarmData> {
    cmdUpdateType: CmdUpdateType.ALARM_DATA;
    allowedEntities: number;
    totalEntities: number;
}
export interface EntityCountUpdateMsg extends CmdUpdateMsg {
    cmdUpdateType: CmdUpdateType.COUNT_DATA;
    count: number;
}
export declare type WebsocketDataMsg = AlarmDataUpdateMsg | EntityDataUpdateMsg | EntityCountUpdateMsg | SubscriptionUpdateMsg;
export declare function isEntityDataUpdateMsg(message: WebsocketDataMsg): message is EntityDataUpdateMsg;
export declare function isAlarmDataUpdateMsg(message: WebsocketDataMsg): message is AlarmDataUpdateMsg;
export declare function isEntityCountUpdateMsg(message: WebsocketDataMsg): message is EntityCountUpdateMsg;
export declare class SubscriptionUpdate implements SubscriptionUpdateMsg {
    subscriptionId: number;
    errorCode: number;
    errorMsg: string;
    data: SubscriptionData;
    constructor(msg: SubscriptionUpdateMsg);
    prepareData(keys: string[]): void;
    updateAttributeData(origData: Array<AttributeData>): Array<AttributeData>;
}
export declare class CmdUpdate implements CmdUpdateMsg {
    cmdId: number;
    errorCode: number;
    errorMsg: string;
    cmdUpdateType: CmdUpdateType;
    constructor(msg: CmdUpdateMsg);
}
export declare class DataUpdate<T> extends CmdUpdate implements DataUpdateMsg<T> {
    data?: PageData<T>;
    update?: Array<T>;
    constructor(msg: DataUpdateMsg<T>);
}
export declare class EntityDataUpdate extends DataUpdate<EntityData> {
    constructor(msg: EntityDataUpdateMsg);
    prepareData(tsOffset: number): void;
    private processEntityData;
}
export declare class AlarmDataUpdate extends DataUpdate<AlarmData> {
    allowedEntities: number;
    totalEntities: number;
    constructor(msg: AlarmDataUpdateMsg);
    prepareData(tsOffset: number): void;
    private processAlarmData;
}
export declare class EntityCountUpdate extends CmdUpdate {
    count: number;
    constructor(msg: EntityCountUpdateMsg);
}
export interface TelemetryService {
    subscribe(subscriber: TelemetrySubscriber): any;
    update(subscriber: TelemetrySubscriber): any;
    unsubscribe(subscriber: TelemetrySubscriber): any;
}
export declare class TelemetrySubscriber {
    private telemetryService;
    private zone?;
    private dataSubject;
    private entityDataSubject;
    private alarmDataSubject;
    private entityCountSubject;
    private reconnectSubject;
    private tsOffset;
    subscriptionCommands: Array<WebsocketCmd>;
    data$: Observable<SubscriptionUpdate>;
    entityData$: Observable<EntityDataUpdate>;
    alarmData$: Observable<AlarmDataUpdate>;
    entityCount$: Observable<EntityCountUpdate>;
    reconnect$: Observable<unknown>;
    static createEntityAttributesSubscription(telemetryService: TelemetryService, entityId: EntityId, attributeScope: TelemetryType, zone: NgZone, keys?: string[]): TelemetrySubscriber;
    constructor(telemetryService: TelemetryService, zone?: NgZone);
    subscribe(): void;
    update(): void;
    unsubscribe(): void;
    complete(): void;
    setTsOffset(tsOffset: number): boolean;
    onData(message: SubscriptionUpdate): void;
    onEntityData(message: EntityDataUpdate): void;
    onAlarmData(message: AlarmDataUpdate): void;
    onEntityCount(message: EntityCountUpdate): void;
    onReconnected(): void;
    attributeData$(): Observable<Array<AttributeData>>;
}
