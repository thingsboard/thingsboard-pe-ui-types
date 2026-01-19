import { CustomTimeSchedulerItem } from "@shared/models/device.models";
import { DashboardId } from "@shared/models/id/dashboard-id";
import { TimeUnit } from "@shared/models/time/time.models";
import { ComplexOperation, EntityKeyValueType, FilterPredicateType } from "@shared/models/query/query.models";
import { EntityType } from "@shared/models/entity-type.models";
import { Observable } from "rxjs";
import { CalculatedField, CalculatedFieldArgument, CalculatedFieldEventArguments } from "@shared/models/calculated-field.models";
export declare const alarmRuleEntityTypeList: EntityType[];
export declare enum AlarmRuleScheduleType {
    ANY_TIME = "ANY_TIME",
    SPECIFIC_TIME = "SPECIFIC_TIME",
    CUSTOM = "CUSTOM"
}
export declare const AlarmRuleScheduleTypeTranslationMap: Map<AlarmRuleScheduleType, string>;
export declare enum AlarmRuleConditionType {
    SIMPLE = "SIMPLE",
    DURATION = "DURATION",
    REPEATING = "REPEATING"
}
export declare const AlarmRuleConditionTypeTranslationMap: Map<AlarmRuleConditionType, string>;
export declare enum AlarmRuleExpressionType {
    SIMPLE = "SIMPLE",
    TBEL = "TBEL"
}
export declare const FilterPredicateTypeTranslationMap: Map<FilterPredicateType, string>;
export interface AlarmRule {
    condition: AlarmRuleCondition;
    alarmDetails?: string;
    dashboardId?: DashboardId;
}
export interface AlarmRuleCondition {
    type: AlarmRuleConditionType;
    expression: AlarmRuleExpression;
    schedule?: AlarmRuleSchedule;
    unit?: TimeUnit;
    value?: AlarmRuleValue<number>;
    count?: AlarmRuleValue<number>;
}
export interface AlarmRuleExpression {
    type: AlarmRuleExpressionType;
    expression?: string;
    filters?: Array<AlarmRuleFilter>;
    operation?: ComplexOperation;
}
export interface AlarmRuleSchedule {
    staticValue?: {
        type?: AlarmRuleScheduleType;
        timezone?: string;
        daysOfWeek?: number[];
        startsOn?: number;
        endsOn?: number;
        items?: CustomTimeSchedulerItem[];
    };
    dynamicValueArgument?: string;
}
export interface AlarmRuleFilter {
    argument: string;
    valueType: EntityKeyValueType;
    operation: ComplexOperation;
    predicates: AlarmRuleFilterPredicate[];
}
export interface AlarmRulePredicateInfo {
    keyFilterPredicate: AlarmRuleFilterPredicate;
}
export type AlarmRuleFilterPredicate = StringAlarmRuleFilterPredicate | NumericAlarmRuleFilterPredicate | BooleanAlarmRuleFilterPredicate | ComplexAlarmRuleFilterPredicate | NoDataAlarmRuleFilterPredicate;
export interface AlarmRuleValue<T> {
    dynamicValueArgument?: string;
    staticValue?: T;
}
export interface StringAlarmRuleFilterPredicate {
    type: AlarmRuleFilterPredicateType.STRING;
    operation: AlarmRuleStringOperation;
    value: AlarmRuleValue<string>;
    ignoreCase: boolean;
}
export interface NumericAlarmRuleFilterPredicate {
    type: AlarmRuleFilterPredicateType.NUMERIC;
    operation: AlarmRuleNumericOperation;
    value: AlarmRuleValue<number>;
}
export interface BooleanAlarmRuleFilterPredicate {
    type: AlarmRuleFilterPredicateType.BOOLEAN;
    operation: AlarmRuleBooleanOperation;
    value: AlarmRuleValue<boolean>;
}
export interface NoDataAlarmRuleFilterPredicate {
    type: AlarmRuleFilterPredicateType.NO_DATA;
    unit: TimeUnit;
    operation: AlarmRuleStringOperation.NO_DATA | AlarmRuleNumericOperation.NO_DATA | AlarmRuleBooleanOperation.NO_DATA;
    duration: AlarmRuleValue<number>;
}
export interface BaseComplexFilterPredicate<T extends AlarmRuleFilterPredicate> {
    type: AlarmRuleFilterPredicateType.COMPLEX;
    operation: ComplexOperation;
    predicates: Array<T>;
}
export type ComplexAlarmRuleFilterPredicate = BaseComplexFilterPredicate<AlarmRuleFilterPredicate>;
export interface AlarmRuleFilterConfig {
    name?: Array<string>;
    entityType?: EntityType;
    entities?: Array<string>;
}
export declare const filterOperationTranslationMap: Map<ComplexOperation, string>;
export declare enum AlarmRuleFilterPredicateType {
    STRING = "STRING",
    NUMERIC = "NUMERIC",
    BOOLEAN = "BOOLEAN",
    COMPLEX = "COMPLEX",
    NO_DATA = "NO_DATA"
}
export declare enum AlarmRuleStringOperation {
    EQUAL = "EQUAL",
    NOT_EQUAL = "NOT_EQUAL",
    NO_DATA = "NO_DATA",
    STARTS_WITH = "STARTS_WITH",
    ENDS_WITH = "ENDS_WITH",
    CONTAINS = "CONTAINS",
    NOT_CONTAINS = "NOT_CONTAINS",
    IN = "IN",
    NOT_IN = "NOT_IN"
}
export declare const alarmRuleStringOperationTranslationMap: Map<AlarmRuleStringOperation, string>;
export declare enum AlarmRuleNumericOperation {
    EQUAL = "EQUAL",
    NOT_EQUAL = "NOT_EQUAL",
    NO_DATA = "NO_DATA",
    GREATER = "GREATER",
    LESS = "LESS",
    GREATER_OR_EQUAL = "GREATER_OR_EQUAL",
    LESS_OR_EQUAL = "LESS_OR_EQUAL"
}
export declare const alarmRuleNumericOperationTranslationMap: Map<AlarmRuleNumericOperation, string>;
export declare enum AlarmRuleBooleanOperation {
    EQUAL = "EQUAL",
    NOT_EQUAL = "NOT_EQUAL",
    NO_DATA = "NO_DATA"
}
export declare const alarmRuleBooleanOperationTranslationMap: Map<AlarmRuleBooleanOperation, string>;
export declare const alarmRuleDefaultScript: string;
export type AlarmRuleTestScriptFn = (calculatedField: CalculatedField, argumentsObj?: CalculatedFieldEventArguments, openCalculatedFieldEdit?: boolean, expression?: string) => Observable<string>;
export declare function checkPredicates(predicates: any[], validSet: Set<string>): boolean;
export declare function areFilterAndPredicateArgumentsValid(obj: any, args: Record<string, CalculatedFieldArgument>): boolean;
export declare function areFiltersAndPredicateArgumentsValid(obj: any, args: Record<string, CalculatedFieldArgument>): boolean;
export declare function isPredicateArgumentsValid(predicates: any, args: Record<string, CalculatedFieldArgument>): boolean;
