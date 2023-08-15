import { EntityType } from '@shared/models/entity-type.models';
import { AggregationType } from '../time/time.models';
import { Observable } from 'rxjs';
import { EntityId } from '@shared/models/id/entity-id';
import { NgZone } from '@angular/core';
import { AlarmCountQuery, AlarmData, AlarmDataQuery, EntityCountQuery, EntityData, EntityDataQuery, EntityFilter, EntityKey, TsValue } from '@shared/models/query/query.models';
import { PageData } from '@shared/models/page/page-data';
import { CmdWrapper, WsSubscriber } from '@shared/models/websocket/websocket.models';
import { TelemetryWebsocketService } from '@core/ws/telemetry-websocket.service';
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
export declare enum TimeseriesDeleteStrategy {
    DELETE_ALL_DATA = "DELETE_ALL_DATA",
    DELETE_ALL_DATA_EXCEPT_LATEST_VALUE = "DELETE_ALL_DATA_EXCEPT_LATEST_VALUE",
    DELETE_LATEST_VALUE = "DELETE_LATEST_VALUE",
    DELETE_ALL_DATA_FOR_TIME_PERIOD = "DELETE_ALL_DATA_FOR_TIME_PERIOD"
}
export type TelemetryType = LatestTelemetry | AttributeScope;
export declare const toTelemetryType: (val: string) => TelemetryType;
export declare const telemetryTypeTranslations: Map<TelemetryType, string>;
export declare const isClientSideTelemetryType: Map<TelemetryType, boolean>;
export declare const timeseriesDeleteStrategyTranslations: Map<TimeseriesDeleteStrategy, string>;
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
export interface AggKey {
    id: number;
    key: string;
    agg: AggregationType;
    previousStartTs?: number;
    previousEndTs?: number;
    previousValueOnly?: boolean;
}
export interface AggEntityHistoryCmd {
    keys: Array<AggKey>;
    startTs: number;
    endTs: number;
}
export interface AggTimeSeriesCmd {
    keys: Array<AggKey>;
    startTs: number;
    timeWindow: number;
}
export declare class EntityDataCmd implements WebsocketCmd {
    cmdId: number;
    query?: EntityDataQuery;
    historyCmd?: EntityHistoryCmd;
    latestCmd?: LatestValueCmd;
    tsCmd?: TimeSeriesCmd;
    aggHistoryCmd?: AggEntityHistoryCmd;
    aggTsCmd?: AggTimeSeriesCmd;
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
export declare class AlarmCountCmd implements WebsocketCmd {
    cmdId: number;
    query?: AlarmCountQuery;
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
export declare class AlarmCountUnsubscribeCmd implements WebsocketCmd {
    cmdId: number;
}
export declare class TelemetryPluginCmdsWrapper implements CmdWrapper {
    constructor();
    attrSubCmds: Array<AttributesSubscriptionCmd>;
    tsSubCmds: Array<TimeseriesSubscriptionCmd>;
    historyCmds: Array<GetHistoryCmd>;
    entityDataCmds: Array<EntityDataCmd>;
    entityDataUnsubscribeCmds: Array<EntityDataUnsubscribeCmd>;
    alarmDataCmds: Array<AlarmDataCmd>;
    alarmDataUnsubscribeCmds: Array<AlarmDataUnsubscribeCmd>;
    entityCountCmds: Array<EntityCountCmd>;
    entityCountUnsubscribeCmds: Array<EntityCountUnsubscribeCmd>;
    alarmCountCmds: Array<AlarmCountCmd>;
    alarmCountUnsubscribeCmds: Array<AlarmCountUnsubscribeCmd>;
    private static popCmds;
    hasCommands(): boolean;
    clear(): void;
    preparePublishCommands(maxCommands: number): TelemetryPluginCmdsWrapper;
}
export interface SubscriptionData {
    [key: string]: [number, any, number?][];
}
export interface IndexedSubscriptionData {
    [id: number]: [number, any, number?][];
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
    ALARM_COUNT_DATA = "ALARM_COUNT_DATA",
    COUNT_DATA = "COUNT_DATA",
    NOTIFICATIONS_COUNT = "NOTIFICATIONS_COUNT",
    NOTIFICATIONS = "NOTIFICATIONS"
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
export interface AlarmCountUpdateMsg extends CmdUpdateMsg {
    cmdUpdateType: CmdUpdateType.ALARM_COUNT_DATA;
    count: number;
}
export type WebsocketDataMsg = AlarmDataUpdateMsg | AlarmCountUpdateMsg | EntityDataUpdateMsg | EntityCountUpdateMsg | SubscriptionUpdateMsg;
export declare const isEntityDataUpdateMsg: (message: WebsocketDataMsg) => message is EntityDataUpdateMsg;
export declare const isAlarmDataUpdateMsg: (message: WebsocketDataMsg) => message is AlarmDataUpdateMsg;
export declare const isEntityCountUpdateMsg: (message: WebsocketDataMsg) => message is EntityCountUpdateMsg;
export declare const isAlarmCountUpdateMsg: (message: WebsocketDataMsg) => message is AlarmCountUpdateMsg;
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
    private static processEntityData;
    prepareData(tsOffset: number): void;
}
export declare class AlarmDataUpdate extends DataUpdate<AlarmData> {
    constructor(msg: AlarmDataUpdateMsg);
    allowedEntities: number;
    totalEntities: number;
    private static processAlarmData;
    prepareData(tsOffset: number): void;
}
export declare class EntityCountUpdate extends CmdUpdate {
    count: number;
    constructor(msg: EntityCountUpdateMsg);
}
export declare class AlarmCountUpdate extends CmdUpdate {
    count: number;
    constructor(msg: AlarmCountUpdateMsg);
}
export declare class TelemetrySubscriber extends WsSubscriber {
    private telemetryService;
    protected zone?: NgZone;
    private dataSubject;
    private entityDataSubject;
    private alarmDataSubject;
    private entityCountSubject;
    private alarmCountSubject;
    private tsOffset;
    data$: Observable<SubscriptionUpdate>;
    entityData$: Observable<EntityDataUpdate>;
    alarmData$: Observable<AlarmDataUpdate>;
    entityCount$: Observable<EntityCountUpdate>;
    alarmCount$: Observable<AlarmCountUpdate>;
    static createEntityAttributesSubscription(telemetryService: TelemetryWebsocketService, entityId: EntityId, attributeScope: TelemetryType, zone: NgZone, keys?: string[]): TelemetrySubscriber;
    static createEntityFilterLatestSubscription(telemetryService: TelemetryWebsocketService, entityFilter: EntityFilter, zone: NgZone, latestKeys?: EntityKey[]): TelemetrySubscriber;
    constructor(telemetryService: TelemetryWebsocketService, zone?: NgZone);
    complete(): void;
    setTsOffset(tsOffset: number): boolean;
    onData(message: SubscriptionUpdate): void;
    onEntityData(message: EntityDataUpdate): void;
    onAlarmData(message: AlarmDataUpdate): void;
    onEntityCount(message: EntityCountUpdate): void;
    onAlarmCount(message: AlarmCountUpdate): void;
    attributeData$(): Observable<Array<AttributeData>>;
}
