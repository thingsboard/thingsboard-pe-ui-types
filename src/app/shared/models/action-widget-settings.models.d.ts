import { AttributeScope } from '@shared/models/telemetry/telemetry.models';
import { widgetType } from '@shared/models/widget.models';
import { AlarmSeverity } from '@shared/models/alarm.models';
import { TbFunction } from '@shared/models/js-function.models';
export declare enum GetValueAction {
    DO_NOTHING = "DO_NOTHING",
    EXECUTE_RPC = "EXECUTE_RPC",
    GET_ATTRIBUTE = "GET_ATTRIBUTE",
    GET_TIME_SERIES = "GET_TIME_SERIES",
    GET_ALARM_STATUS = "GET_ALARM_STATUS",
    GET_DASHBOARD_STATE = "GET_DASHBOARD_STATE",
    GET_DASHBOARD_STATE_OBJECT = "GET_DASHBOARD_STATE_OBJECT"
}
export declare const getValueActions: GetValueAction[];
export declare const getValueActionsByWidgetType: (type: widgetType) => GetValueAction[];
export declare const getValueActionTranslations: Map<GetValueAction, string>;
export interface RpcSettings {
    method: string;
    requestTimeout: number;
    requestPersistent: boolean;
    persistentPollingInterval: number;
}
export interface AlarmStatusSettings {
    severityList: Array<AlarmSeverity>;
    typeList: Array<string>;
}
export interface TelemetryValueSettings {
    key: string;
}
export interface GetAttributeValueSettings extends TelemetryValueSettings {
    scope: AttributeScope | null;
}
export interface SetAttributeValueSettings extends TelemetryValueSettings {
    scope: AttributeScope.SERVER_SCOPE | AttributeScope.SHARED_SCOPE;
}
export declare enum DataToValueType {
    NONE = "NONE",
    FUNCTION = "FUNCTION"
}
export interface DataToValueSettings {
    type: DataToValueType;
    dataToValueFunction: TbFunction;
    compareToValue?: any;
}
export interface ValueActionSettings {
    actionLabel?: string;
}
export interface GetValueSettings<V> extends ValueActionSettings {
    action: GetValueAction;
    defaultValue: V;
    executeRpc?: RpcSettings;
    getAttribute: GetAttributeValueSettings;
    getTimeSeries: TelemetryValueSettings;
    getAlarmStatus: AlarmStatusSettings;
    dataToValue: DataToValueSettings;
}
export declare enum SetValueAction {
    EXECUTE_RPC = "EXECUTE_RPC",
    SET_ATTRIBUTE = "SET_ATTRIBUTE",
    ADD_TIME_SERIES = "ADD_TIME_SERIES"
}
export declare const setValueActions: SetValueAction[];
export declare const setValueActionsByWidgetType: (type: widgetType) => SetValueAction[];
export declare const setValueActionTranslations: Map<SetValueAction, string>;
export declare enum ValueToDataType {
    VALUE = "VALUE",
    CONSTANT = "CONSTANT",
    FUNCTION = "FUNCTION",
    NONE = "NONE"
}
export interface ValueToDataSettings {
    type: ValueToDataType;
    constantValue: any;
    valueToDataFunction: TbFunction;
}
export interface SetValueSettings extends ValueActionSettings {
    action: SetValueAction;
    executeRpc: RpcSettings;
    setAttribute: SetAttributeValueSettings;
    putTimeSeries: TelemetryValueSettings;
    valueToData: ValueToDataSettings;
}
