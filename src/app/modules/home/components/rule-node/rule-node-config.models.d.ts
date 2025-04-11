import { EntityField } from '@shared/models/entity.models';
import { EntitySearchDirection, RelationEntityTypeFilter } from '@shared/models/relation.models';
import { EntityType } from '@shared/models/entity-type.models';
export declare enum OriginatorSource {
    CUSTOMER = "CUSTOMER",
    TENANT = "TENANT",
    RELATED = "RELATED",
    ALARM_ORIGINATOR = "ALARM_ORIGINATOR",
    ENTITY = "ENTITY"
}
export interface OriginatorValuesDescriptions {
    value: OriginatorSource;
    name: string;
    description: string;
}
export declare const originatorSourceTranslations: Map<OriginatorSource, string>;
export declare const originatorSourceDescTranslations: Map<OriginatorSource, string>;
export declare const allowedOriginatorFields: EntityField[];
export declare const OriginatorFieldsMappingValues: Map<string, string>;
export declare enum PerimeterType {
    CIRCLE = "CIRCLE",
    POLYGON = "POLYGON"
}
export declare const perimeterTypeTranslations: Map<PerimeterType, string>;
export declare enum TimeUnit {
    MILLISECONDS = "MILLISECONDS",
    SECONDS = "SECONDS",
    MINUTES = "MINUTES",
    HOURS = "HOURS",
    DAYS = "DAYS"
}
export declare const timeUnitTranslations: Map<TimeUnit, string>;
export declare enum RangeUnit {
    METER = "METER",
    KILOMETER = "KILOMETER",
    FOOT = "FOOT",
    MILE = "MILE",
    NAUTICAL_MILE = "NAUTICAL_MILE"
}
export declare const rangeUnitTranslations: Map<RangeUnit, string>;
export declare enum EntityDetailsField {
    ID = "ID",
    TITLE = "TITLE",
    COUNTRY = "COUNTRY",
    STATE = "STATE",
    CITY = "CITY",
    ZIP = "ZIP",
    ADDRESS = "ADDRESS",
    ADDRESS2 = "ADDRESS2",
    PHONE = "PHONE",
    EMAIL = "EMAIL",
    ADDITIONAL_INFO = "ADDITIONAL_INFO"
}
export interface SvMapOption {
    name: string;
    value: any;
}
export declare const entityDetailsTranslations: Map<EntityDetailsField, string>;
export declare enum FetchMode {
    FIRST = "FIRST",
    LAST = "LAST",
    ALL = "ALL"
}
export declare const deduplicationStrategiesTranslations: Map<FetchMode, string>;
export declare const deduplicationStrategiesHintTranslations: Map<FetchMode, string>;
export declare enum SamplingOrder {
    ASC = "ASC",
    DESC = "DESC"
}
export declare enum DataToFetch {
    ATTRIBUTES = "ATTRIBUTES",
    LATEST_TELEMETRY = "LATEST_TELEMETRY",
    FIELDS = "FIELDS"
}
export declare const dataToFetchTranslations: Map<DataToFetch, string>;
export declare const msgMetadataLabelTranslations: Map<DataToFetch, string>;
export declare const samplingOrderTranslations: Map<SamplingOrder, string>;
export declare enum SqsQueueType {
    STANDARD = "STANDARD",
    FIFO = "FIFO"
}
export declare const sqsQueueTypeTranslations: Map<SqsQueueType, string>;
export type credentialsType = 'anonymous' | 'basic' | 'cert.PEM';
export declare const credentialsTypes: credentialsType[];
export declare const credentialsTypeTranslations: Map<credentialsType, string>;
export type AzureIotHubCredentialsType = 'sas' | 'cert.PEM';
export declare const azureIotHubCredentialsTypes: AzureIotHubCredentialsType[];
export declare const azureIotHubCredentialsTypeTranslations: Map<AzureIotHubCredentialsType, string>;
export declare enum HttpRequestType {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
}
export declare enum OwnerType {
    TENANT = "TENANT",
    CUSTOMER = "CUSTOMER"
}
export declare const ownerTypeTranslations: Map<OwnerType, string>;
export declare enum AggMathFunction {
    MIN = "MIN",
    MAX = "MAX",
    SUM = "SUM",
    AVG = "AVG",
    COUNT = "COUNT",
    COUNT_UNIQUE = "COUNT_UNIQUE"
}
export declare const aggMathFunctionTranslations: Map<AggMathFunction, string>;
export declare const allowedEntityGroupTypes: Array<EntityType>;
export declare enum AggIntervalType {
    HOUR = "HOUR",
    DAY = "DAY",
    WEEK = "WEEK",
    WEEK_SUN_SAT = "WEEK_SUN_SAT",
    MONTH = "MONTH",
    YEAR = "YEAR",
    CUSTOM = "CUSTOM"
}
export declare const aggIntervalTypeTranslations: Map<AggIntervalType, string>;
export declare enum IntervalPersistPolicy {
    ON_EACH_CHECK = "ON_EACH_CHECK",
    ON_EACH_CHECK_AFTER_INTERVAL_END = "ON_EACH_CHECK_AFTER_INTERVAL_END",
    ON_EACH_MESSAGE = "ON_EACH_MESSAGE"
}
export declare const intervalPersistPolicyTranslations: Map<IntervalPersistPolicy, string>;
export declare enum StatePersistPolicy {
    ON_EACH_CHANGE = "ON_EACH_CHANGE",
    PERIODICALLY = "PERIODICALLY"
}
export declare const statePersistPolicyTranslations: Map<StatePersistPolicy, string>;
export declare const ToByteStandartCharsetTypes: string[];
export declare const ToByteStandartCharsetTypeTranslations: Map<string, string>;
export interface RelationsQuery {
    fetchLastLevelOnly: boolean;
    direction: EntitySearchDirection;
    maxLevel?: number;
    filters?: RelationEntityTypeFilter[];
}
export declare const defaultRelationsQuery: RelationsQuery;
export type ParentEntitiesQueryType = 'single' | 'group' | 'relationsQuery';
export declare function prepareParentEntitiesQuery(parentEntitiesQuery: any): any;
export interface FunctionData {
    value: MathFunction;
    name: string;
    description: string;
    minArgs: number;
    maxArgs: number;
}
export declare enum MathFunction {
    CUSTOM = "CUSTOM",
    ADD = "ADD",
    SUB = "SUB",
    MULT = "MULT",
    DIV = "DIV",
    SIN = "SIN",
    SINH = "SINH",
    COS = "COS",
    COSH = "COSH",
    TAN = "TAN",
    TANH = "TANH",
    ACOS = "ACOS",
    ASIN = "ASIN",
    ATAN = "ATAN",
    ATAN2 = "ATAN2",
    EXP = "EXP",
    EXPM1 = "EXPM1",
    SQRT = "SQRT",
    CBRT = "CBRT",
    GET_EXP = "GET_EXP",
    HYPOT = "HYPOT",
    LOG = "LOG",
    LOG10 = "LOG10",
    LOG1P = "LOG1P",
    CEIL = "CEIL",
    FLOOR = "FLOOR",
    FLOOR_DIV = "FLOOR_DIV",
    FLOOR_MOD = "FLOOR_MOD",
    ABS = "ABS",
    MIN = "MIN",
    MAX = "MAX",
    POW = "POW",
    SIGNUM = "SIGNUM",
    RAD = "RAD",
    DEG = "DEG"
}
export declare const MathFunctionMap: Map<MathFunction, FunctionData>;
export declare enum ArgumentType {
    MESSAGE_BODY = "MESSAGE_BODY",
    MESSAGE_METADATA = "MESSAGE_METADATA",
    ATTRIBUTE = "ATTRIBUTE",
    TIME_SERIES = "TIME_SERIES",
    CONSTANT = "CONSTANT"
}
export declare enum ArgumentTypeResult {
    MESSAGE_BODY = "MESSAGE_BODY",
    MESSAGE_METADATA = "MESSAGE_METADATA",
    ATTRIBUTE = "ATTRIBUTE",
    TIME_SERIES = "TIME_SERIES"
}
export declare enum FetchTo {
    DATA = "DATA",
    METADATA = "METADATA"
}
export declare const FetchFromToTranslation: Map<FetchTo, string>;
export declare const FetchFromTranslation: Map<FetchTo, string>;
export declare const FetchToTranslation: Map<FetchTo, string>;
export declare const FetchToRenameTranslation: Map<FetchTo, string>;
export interface ArgumentTypeData {
    name: string;
    description: string;
}
export declare const ArgumentTypeMap: Map<ArgumentType, ArgumentTypeData>;
export declare const ArgumentTypeResultMap: Map<ArgumentTypeResult, ArgumentTypeData>;
export declare const ArgumentName: string[];
export declare enum AttributeScope {
    SHARED_SCOPE = "SHARED_SCOPE",
    SERVER_SCOPE = "SERVER_SCOPE",
    CLIENT_SCOPE = "CLIENT_SCOPE"
}
export declare enum AttributeScopeResult {
    SHARED_SCOPE = "SHARED_SCOPE",
    SERVER_SCOPE = "SERVER_SCOPE"
}
export declare const AttributeScopeMap: Map<AttributeScope, string>;
export declare enum PresenceMonitoringStrategy {
    ON_FIRST_MESSAGE = "ON_FIRST_MESSAGE",
    ON_EACH_MESSAGE = "ON_EACH_MESSAGE"
}
export interface PresenceMonitoringStrategyData {
    value: boolean;
    name: string;
}
export declare const PresenceMonitoringStrategiesData: Map<PresenceMonitoringStrategy, PresenceMonitoringStrategyData>;
export declare const IntLimit = 2147483648;
