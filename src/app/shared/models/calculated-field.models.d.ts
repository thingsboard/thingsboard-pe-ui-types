import { HasEntityDebugSettings, HasTenantId, HasVersion } from '@shared/models/entity.models';
import { BaseData, ExportableEntity } from '@shared/models/base-data';
import { CalculatedFieldId } from '@shared/models/id/calculated-field-id';
import { EntityId } from '@shared/models/id/entity-id';
import { AttributeScope } from '@shared/models/telemetry/telemetry.models';
import { EntityType } from '@shared/models/entity-type.models';
import { AliasFilterType } from '@shared/models/alias.models';
import { Observable } from 'rxjs';
import { TbEditorCompleter } from '@shared/models/ace/completion.models';
import { AceHighlightRules } from '@shared/models/ace/ace.models';
import { EntitySearchDirection } from '@shared/models/relation.models';
import { ValidatorFn } from '@angular/forms';
import { AlarmRule } from "@shared/models/alarm-rule.models";
import { AlarmSeverity } from "@shared/models/alarm.models";
import { JobStatus } from '@shared/models/job.models';
export declare const FORBIDDEN_NAMES: string[];
interface BaseCalculatedField extends Omit<BaseData<CalculatedFieldId>, 'label'>, HasVersion, HasEntityDebugSettings, HasTenantId, ExportableEntity<CalculatedFieldId> {
    entityId: EntityId;
}
export interface CalculatedFieldSimple extends BaseCalculatedField {
    type: CalculatedFieldType.SIMPLE;
    configuration: CalculatedFieldSimpleConfiguration;
}
export interface CalculatedFieldScript extends BaseCalculatedField {
    type: CalculatedFieldType.SCRIPT;
    configuration: CalculatedFieldScriptConfiguration;
}
export interface CalculatedFieldGeofencing extends BaseCalculatedField {
    type: CalculatedFieldType.GEOFENCING;
    configuration: CalculatedFieldGeofencingConfiguration;
}
export interface CalculatedFieldPropagation extends BaseCalculatedField {
    type: CalculatedFieldType.PROPAGATION;
    configuration: CalculatedFieldPropagationConfiguration;
}
export interface CalculatedFieldAlarmRule extends BaseCalculatedField {
    type: CalculatedFieldType.ALARM;
    configuration: CalculatedFieldAlarmRuleConfiguration;
}
export interface CalculatedFieldRelatedEntityAggregation extends BaseCalculatedField {
    type: CalculatedFieldType.RELATED_ENTITIES_AGGREGATION;
    configuration: CalculatedFieldRelatedAggregationConfiguration;
}
export type CalculatedField = CalculatedFieldSimple | CalculatedFieldScript | CalculatedFieldGeofencing | CalculatedFieldPropagation | CalculatedFieldRelatedEntityAggregation | CalculatedFieldAlarmRule;
export type CalculatedFieldInfo = CalculatedField & {
    entityName: string;
};
export declare enum CalculatedFieldType {
    SIMPLE = "SIMPLE",
    SCRIPT = "SCRIPT",
    GEOFENCING = "GEOFENCING",
    PROPAGATION = "PROPAGATION",
    RELATED_ENTITIES_AGGREGATION = "RELATED_ENTITIES_AGGREGATION",
    ENTITY_AGGREGATION = "ENTITY_AGGREGATION",
    ALARM = "ALARM"
}
export interface CalculatedFieldTypeTranslate {
    name: string;
    hint?: string;
}
export declare const CalculatedFieldTypeTranslations: Map<CalculatedFieldType, CalculatedFieldTypeTranslate>;
export declare const calculatedFieldTypes: (CalculatedFieldType.SIMPLE | CalculatedFieldType.SCRIPT | CalculatedFieldType.GEOFENCING | CalculatedFieldType.PROPAGATION | CalculatedFieldType.RELATED_ENTITIES_AGGREGATION | CalculatedFieldType.ENTITY_AGGREGATION)[];
export type CalculatedFieldConfiguration = CalculatedFieldSimpleConfiguration | CalculatedFieldScriptConfiguration | CalculatedFieldGeofencingConfiguration | CalculatedFieldPropagationConfiguration | CalculatedFieldRelatedAggregationConfiguration | CalculatedFieldEntityAggregationConfiguration | CalculatedFieldAlarmRuleConfiguration;
export interface CalculatedFieldSimpleConfiguration {
    type: CalculatedFieldType.SIMPLE;
    expression: string;
    arguments: Record<string, CalculatedFieldArgument>;
    useLatestTs: boolean;
    output: CalculatedFieldSimpleOutput;
}
export interface CalculatedFieldScriptConfiguration {
    type: CalculatedFieldType.SCRIPT;
    expression: string;
    arguments: Record<string, CalculatedFieldArgument>;
    output: CalculatedFieldOutput;
}
export interface CalculatedFieldGeofencingConfiguration {
    type: CalculatedFieldType.GEOFENCING;
    zoneGroups: Record<string, CalculatedFieldGeofencing>;
    scheduledUpdateEnabled: boolean;
    scheduledUpdateInterval?: number;
    output: CalculatedFieldOutput;
}
export interface CalculatedFieldRelatedAggregationConfiguration {
    type: CalculatedFieldType.RELATED_ENTITIES_AGGREGATION;
    relation: RelationPathLevel;
    arguments: Record<string, CalculatedFieldArgument>;
    metrics: Record<string, CalculatedFieldAggMetric>;
    deduplicationIntervalInSec: number;
    scheduledUpdateInterval?: number;
    useLatestTs: boolean;
    output: CalculatedFieldOutput & {
        decimalsByDefault?: number;
    };
}
export interface CalculatedFieldEntityAggregationConfiguration {
    type: CalculatedFieldType.ENTITY_AGGREGATION;
    arguments: Record<string, CalculatedFieldArgument>;
    metrics: Record<string, CalculatedFieldAggMetric>;
    interval: AggInterval;
    watermark?: WatermarkConfig;
    produceIntermediateResult?: boolean;
    output: CalculatedFieldOutput & {
        decimalsByDefault?: number;
    };
}
export interface WatermarkConfig {
    duration: number;
}
interface BasePropagationConfiguration {
    type: CalculatedFieldType.PROPAGATION;
    relation: RelationPathLevel;
    arguments: Record<string, CalculatedFieldArgument>;
    output: CalculatedFieldOutput;
}
interface CalculatedFieldAlarmRuleConfiguration {
    type: CalculatedFieldType.ALARM;
    arguments: Record<string, CalculatedFieldArgument>;
    createRules: Record<AlarmSeverity, AlarmRule>;
    clearRule?: AlarmRule;
    propagate: boolean;
    propagateToOwner: boolean;
    propagateToOwnerHierarchy: boolean;
    propagateToTenant: boolean;
    propagateRelationTypes?: Array<string>;
}
export interface PropagationWithNoExpression extends BasePropagationConfiguration {
    applyExpressionToResolvedArguments: false;
}
export interface PropagationWithExpression extends BasePropagationConfiguration {
    applyExpressionToResolvedArguments: true;
    expression: string;
}
export type CalculatedFieldPropagationConfiguration = PropagationWithNoExpression | PropagationWithExpression;
export type CalculatedFieldOutput = CalculatedFieldOutputAttribute | CalculatedFieldOutputTimeSeries;
export interface CalculatedFieldOutputAttribute {
    type: OutputType.Attribute;
    scope: AttributeScope;
    strategy: AttributeOutputStrategy;
}
export interface CalculatedFieldOutputTimeSeries {
    type: OutputType.Timeseries;
    strategy: TimeSeriesOutputStrategy;
}
export type CalculatedFieldSimpleOutput = CalculatedFieldOutput & {
    name: string;
    decimalsByDefault?: number;
};
export type AttributeOutputStrategy = AttributeImmediateOutputStrategy | AttributeRuleChainOutputStrategy;
export interface AttributeImmediateOutputStrategy {
    type: OutputStrategyType.IMMEDIATE;
    updateAttributesOnlyOnValueChange: boolean;
    sendAttributesUpdatedNotification: boolean;
    saveAttribute: boolean;
    sendWsUpdate: boolean;
    processCfs: boolean;
}
export interface AttributeRuleChainOutputStrategy {
    type: OutputStrategyType.RULE_CHAIN;
}
export type TimeSeriesOutputStrategy = TimeSeriesRuleChainOutputStrategy | TimeSeriesImmediateOutputStrategy;
export interface TimeSeriesRuleChainOutputStrategy {
    type: OutputStrategyType.IMMEDIATE;
    ttl: number;
    saveTimeSeries: boolean;
    saveLatest: boolean;
    sendWsUpdate: boolean;
    processCfs: boolean;
}
export interface TimeSeriesImmediateOutputStrategy {
    type: OutputStrategyType.RULE_CHAIN;
}
export declare enum OutputStrategyType {
    IMMEDIATE = "IMMEDIATE",
    RULE_CHAIN = "RULE_CHAIN"
}
export declare const OutputStrategyTypeTranslations: Map<OutputStrategyType, string>;
export declare enum ArgumentEntityType {
    Current = "CURRENT",
    Device = "DEVICE",
    Asset = "ASSET",
    Customer = "CUSTOMER",
    Tenant = "TENANT",
    Owner = "CURRENT_OWNER",
    RelationQuery = "RELATION_PATH_QUERY"
}
export declare const ArgumentEntityTypeTranslations: Map<ArgumentEntityType, string>;
export declare enum GeofencingReportStrategy {
    REPORT_TRANSITION_EVENTS_ONLY = "REPORT_TRANSITION_EVENTS_ONLY",
    REPORT_PRESENCE_STATUS_ONLY = "REPORT_PRESENCE_STATUS_ONLY",
    REPORT_TRANSITION_EVENTS_AND_PRESENCE_STATUS = "REPORT_TRANSITION_EVENTS_AND_PRESENCE_STATUS"
}
export declare const GeofencingReportStrategyTranslations: Map<GeofencingReportStrategy, string>;
export declare const GeofencingDirectionTranslations: Map<EntitySearchDirection, string>;
export declare const GeofencingDirectionLevelTranslations: Map<EntitySearchDirection, string>;
export declare const PropagationDirectionTranslations: Map<EntitySearchDirection, string>;
export declare enum ArgumentType {
    Attribute = "ATTRIBUTE",
    LatestTelemetry = "TS_LATEST",
    Rolling = "TS_ROLLING"
}
export declare enum TestArgumentType {
    Single = "SINGLE_VALUE",
    Rolling = "TS_ROLLING"
}
export declare const TestArgumentTypeMap: Map<ArgumentType, TestArgumentType>;
export declare enum OutputType {
    Attribute = "ATTRIBUTES",
    Timeseries = "TIME_SERIES"
}
export declare const OutputTypeTranslations: Map<OutputType, string>;
export declare const ArgumentTypeTranslations: Map<ArgumentType, string>;
export interface CalculatedFieldArgument {
    refEntityKey: RefEntityKey;
    defaultValue?: string;
    refEntityId?: RefEntityId;
    refDynamicSourceConfiguration?: RefDynamicSourceConfiguration;
    limit?: number;
    timeWindow?: number;
}
export interface RefDynamicSourceConfiguration {
    type: ArgumentEntityType.Owner;
}
export declare enum AggFunction {
    AVG = "AVG",
    MIN = "MIN",
    MAX = "MAX",
    SUM = "SUM",
    COUNT = "COUNT",
    COUNT_UNIQUE = "COUNT_UNIQUE"
}
export declare const AggFunctionTranslations: Map<AggFunction, string>;
export declare enum AggIntervalType {
    HOUR = "HOUR",
    DAY = "DAY",
    WEEK = "WEEK",
    WEEK_SUN_SAT = "WEEK_SUN_SAT",
    MONTH = "MONTH",
    QUARTER = "QUARTER",
    YEAR = "YEAR",
    CUSTOM = "CUSTOM"
}
export declare const AggIntervalTypeTranslations: Map<AggIntervalType, string>;
export interface AggInterval {
    type: AggIntervalType;
    tz: string;
    offsetSec?: number;
    durationSec?: number;
}
export interface CalculatedFieldAggMetric {
    function: AggFunction;
    filter?: string;
    input: AggKeyInput | AggFunctionInput;
    defaultValue?: number;
}
export interface CalculatedFieldAggMetricValue extends CalculatedFieldAggMetric {
    name: string;
}
export declare enum AggInputType {
    key = "key",
    function = "function"
}
export declare const AggInputTypeTranslations: Map<AggInputType, string>;
export interface AggKeyInput {
    type: AggInputType.key;
    key: string;
}
export interface AggFunctionInput {
    type: AggInputType.function;
    function: string;
}
export interface CalculatedFieldGeofencing {
    perimeterKeyName: string;
    reportStrategy: GeofencingReportStrategy;
    refEntityId?: RefEntityId;
    refDynamicSourceConfiguration: RefDynamicSourceGeofencingConfiguration;
    createRelationsWithMatchedZones: boolean;
    relationType: string;
    direction: EntitySearchDirection;
}
export interface RefDynamicSourceGeofencingConfiguration {
    type: ArgumentEntityType.RelationQuery | ArgumentEntityType.Owner;
    levels?: Array<RelationPathLevel>;
}
export interface CalculatedFieldGeofencingValue extends CalculatedFieldGeofencing {
    name: string;
    entityName?: string;
}
export interface RefEntityKey {
    key: string;
    type: ArgumentType;
    scope?: AttributeScope;
}
export interface RefEntityId {
    entityType: ArgumentEntityType;
    id: string;
}
export interface CalculatedFieldArgumentValue extends CalculatedFieldArgument {
    argumentName: string;
    entityName?: string;
}
export type CalculatedFieldTestScriptFn = (calculatedField: CalculatedField, argumentsObj?: Record<string, unknown>, closeAllOnSave?: boolean, expression?: string) => Observable<string>;
export interface CalculatedFieldTestScriptInputParams {
    arguments: CalculatedFieldEventArguments;
    expression: string;
}
export interface ArgumentEntityTypeParams {
    title: string;
    entityType: EntityType;
}
export declare const ArgumentEntityTypeParamsMap: Map<ArgumentEntityType, ArgumentEntityTypeParams>;
export declare const getCalculatedFieldCurrentEntityFilter: (entityName: string, entityId: EntityId) => {
    assetTypes: string[];
    type: AliasFilterType;
    deviceTypes?: undefined;
    singleEntity?: undefined;
} | {
    deviceTypes: string[];
    type: AliasFilterType;
    assetTypes?: undefined;
    singleEntity?: undefined;
} | {
    type: AliasFilterType;
    singleEntity: EntityId;
    assetTypes?: undefined;
    deviceTypes?: undefined;
};
export declare const debugCfActionEnabled: (cf: CalculatedField) => boolean;
export interface CalculatedFieldArgumentValueBase {
    argumentName: string;
    type: ArgumentType;
}
export interface RelationPathLevel {
    direction: EntitySearchDirection;
    relationType: string;
}
export interface CalculatedFieldAttributeArgumentValue<ValueType = unknown> extends CalculatedFieldArgumentValueBase {
    ts: number;
    value: ValueType;
}
export interface CalculatedFieldLatestTelemetryArgumentValue<ValueType = unknown> extends CalculatedFieldArgumentValueBase {
    ts: number;
    value: ValueType;
}
export interface CalculatedFieldRollingTelemetryArgumentValue<ValueType = unknown> extends CalculatedFieldArgumentValueBase {
    timeWindow: {
        startTs: number;
        endTs: number;
    };
    values: CalculatedFieldSingleArgumentValue<ValueType>[];
}
export interface CalculatedFieldReprocessingValidation {
    isValid: boolean;
    message: string;
    lastJobStatus: JobStatus;
}
export type CalculatedFieldSingleArgumentValue<ValueType = unknown> = CalculatedFieldAttributeArgumentValue<ValueType> & CalculatedFieldLatestTelemetryArgumentValue<ValueType>;
export type CalculatedFieldArgumentEventValue<ValueType = unknown> = CalculatedFieldAttributeArgumentValue<ValueType> | CalculatedFieldLatestTelemetryArgumentValue<ValueType> | CalculatedFieldRollingTelemetryArgumentValue<ValueType>;
export type CalculatedFieldEventArguments<ValueType = unknown> = Record<string, CalculatedFieldArgumentEventValue<ValueType>>;
export declare const calculatedFieldsEntityTypeList: EntityType[];
export declare const defaultCalculatedFieldOutput: CalculatedFieldOutputTimeSeries;
export declare const defaultSimpleCalculatedFieldOutput: CalculatedFieldSimpleOutput;
export declare const CalculatedFieldCtxLatestTelemetryArgumentAutocomplete: {
    meta: string;
    type: string;
    description: string;
    children: {
        ts: {
            meta: string;
            type: string;
            description: string;
        };
        value: {
            meta: string;
            type: string;
            description: string;
        };
    };
};
export declare const CalculatedFieldCtxAttributeValueArgumentAutocomplete: {
    meta: string;
    type: string;
    description: string;
    children: {
        ts: {
            meta: string;
            type: string;
            description: string;
        };
        value: {
            meta: string;
            type: string;
            description: string;
        };
    };
};
export declare const CalculatedFieldLatestTelemetryArgumentAutocomplete: {
    meta: string;
    type: string;
    description: string;
};
export declare const CalculatedFieldAttributeValueArgumentAutocomplete: {
    meta: string;
    type: string;
    description: string;
};
export declare const CalculatedFieldRollingValueArgumentFunctionsAutocomplete: {
    max: {
        meta: string;
        description: string;
        args: {
            name: string;
            description: string;
            type: string;
            optional: boolean;
        }[];
        return: {
            description: string;
            type: string;
        };
    };
    min: {
        meta: string;
        description: string;
        args: {
            name: string;
            description: string;
            type: string;
            optional: boolean;
        }[];
        return: {
            description: string;
            type: string;
        };
    };
    mean: {
        meta: string;
        description: string;
        args: {
            name: string;
            description: string;
            type: string;
            optional: boolean;
        }[];
        return: {
            description: string;
            type: string;
        };
    };
    avg: {
        meta: string;
        description: string;
        args: {
            name: string;
            description: string;
            type: string;
            optional: boolean;
        }[];
        return: {
            description: string;
            type: string;
        };
    };
    std: {
        meta: string;
        description: string;
        args: {
            name: string;
            description: string;
            type: string;
            optional: boolean;
        }[];
        return: {
            description: string;
            type: string;
        };
    };
    median: {
        meta: string;
        description: string;
        args: {
            name: string;
            description: string;
            type: string;
            optional: boolean;
        }[];
        return: {
            description: string;
            type: string;
        };
    };
    count: {
        meta: string;
        description: string;
        args: {
            name: string;
            description: string;
            type: string;
            optional: boolean;
        }[];
        return: {
            description: string;
            type: string;
        };
    };
    last: {
        meta: string;
        description: string;
        args: {
            name: string;
            description: string;
            type: string;
            optional: boolean;
        }[];
        return: {
            description: string;
            type: string;
        };
    };
    first: {
        meta: string;
        description: string;
        args: {
            name: string;
            description: string;
            type: string;
            optional: boolean;
        }[];
        return: {
            description: string;
            type: string;
        };
    };
    sum: {
        meta: string;
        description: string;
        args: {
            name: string;
            description: string;
            type: string;
            optional: boolean;
        }[];
        return: {
            description: string;
            type: string;
        };
    };
    merge: {
        meta: string;
        description: string;
        args: {
            name: string;
            description: string;
            type: string;
            optional: boolean;
        }[];
        return: {
            description: string;
            type: string;
        };
    };
    mergeAll: {
        meta: string;
        description: string;
        args: {
            name: string;
            description: string;
            type: string;
            optional: boolean;
        }[];
        return: {
            description: string;
            type: string;
        };
    };
};
export declare const CalculatedFieldRollingValueArgumentAutocomplete: {
    meta: string;
    type: string;
    description: string;
    children: {
        values: {
            meta: string;
            type: string;
            description: string;
        };
        timeWindow: {
            meta: string;
            type: string;
            description: string;
            children: {
                startTs: {
                    meta: string;
                    type: string;
                    description: string;
                };
                endTs: {
                    meta: string;
                    type: string;
                    description: string;
                };
            };
        };
        max: {
            meta: string;
            description: string;
            args: {
                name: string;
                description: string;
                type: string;
                optional: boolean;
            }[];
            return: {
                description: string;
                type: string;
            };
        };
        min: {
            meta: string;
            description: string;
            args: {
                name: string;
                description: string;
                type: string;
                optional: boolean;
            }[];
            return: {
                description: string;
                type: string;
            };
        };
        mean: {
            meta: string;
            description: string;
            args: {
                name: string;
                description: string;
                type: string;
                optional: boolean;
            }[];
            return: {
                description: string;
                type: string;
            };
        };
        avg: {
            meta: string;
            description: string;
            args: {
                name: string;
                description: string;
                type: string;
                optional: boolean;
            }[];
            return: {
                description: string;
                type: string;
            };
        };
        std: {
            meta: string;
            description: string;
            args: {
                name: string;
                description: string;
                type: string;
                optional: boolean;
            }[];
            return: {
                description: string;
                type: string;
            };
        };
        median: {
            meta: string;
            description: string;
            args: {
                name: string;
                description: string;
                type: string;
                optional: boolean;
            }[];
            return: {
                description: string;
                type: string;
            };
        };
        count: {
            meta: string;
            description: string;
            args: {
                name: string;
                description: string;
                type: string;
                optional: boolean;
            }[];
            return: {
                description: string;
                type: string;
            };
        };
        last: {
            meta: string;
            description: string;
            args: {
                name: string;
                description: string;
                type: string;
                optional: boolean;
            }[];
            return: {
                description: string;
                type: string;
            };
        };
        first: {
            meta: string;
            description: string;
            args: {
                name: string;
                description: string;
                type: string;
                optional: boolean;
            }[];
            return: {
                description: string;
                type: string;
            };
        };
        sum: {
            meta: string;
            description: string;
            args: {
                name: string;
                description: string;
                type: string;
                optional: boolean;
            }[];
            return: {
                description: string;
                type: string;
            };
        };
        merge: {
            meta: string;
            description: string;
            args: {
                name: string;
                description: string;
                type: string;
                optional: boolean;
            }[];
            return: {
                description: string;
                type: string;
            };
        };
        mergeAll: {
            meta: string;
            description: string;
            args: {
                name: string;
                description: string;
                type: string;
                optional: boolean;
            }[];
            return: {
                description: string;
                type: string;
            };
        };
    };
};
export declare const getCalculatedFieldArgumentsEditorCompleter: (argumentsObj: Record<string, CalculatedFieldArgument>) => TbEditorCompleter;
export declare const getCalculatedFieldArgumentsHighlights: (argumentsObj: Record<string, CalculatedFieldArgument>) => AceHighlightRules;
export declare const calculatedFieldDefaultScript: string;
export declare function notEmptyObjectValidator(): ValidatorFn;
export declare function forbiddenNamesValidator(forbiddenNames: string[]): ValidatorFn;
export declare function uniqueNameValidator(existingNames: string[]): ValidatorFn;
export interface CalculatedFieldsQuery {
    types: Array<CalculatedFieldType>;
    entityType?: EntityType;
    entities?: Array<string>;
    name?: Array<string>;
}
export declare const calculatedFieldMetricFilterDefaultScript: string;
export declare const calculatedFieldMetricMapDefaultScript: string;
export {};
