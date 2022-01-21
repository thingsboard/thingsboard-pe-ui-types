import { BaseData } from '@shared/models/base-data';
import { TenantId } from '@shared/models/id/tenant-id';
import { AlarmId } from '@shared/models/id/alarm-id';
import { EntityId } from '@shared/models/id/entity-id';
import { TimePageLink } from '@shared/models/page/page-link';
import { CustomerId } from '@shared/models/id/customer-id';
import { TableCellButtonActionDescriptor } from '@home/components/widget/lib/table-widget.models';
export declare enum AlarmSeverity {
    CRITICAL = "CRITICAL",
    MAJOR = "MAJOR",
    MINOR = "MINOR",
    WARNING = "WARNING",
    INDETERMINATE = "INDETERMINATE"
}
export declare enum AlarmStatus {
    ACTIVE_UNACK = "ACTIVE_UNACK",
    ACTIVE_ACK = "ACTIVE_ACK",
    CLEARED_UNACK = "CLEARED_UNACK",
    CLEARED_ACK = "CLEARED_ACK"
}
export declare enum AlarmSearchStatus {
    ANY = "ANY",
    ACTIVE = "ACTIVE",
    CLEARED = "CLEARED",
    ACK = "ACK",
    UNACK = "UNACK"
}
export declare const alarmSeverityTranslations: Map<AlarmSeverity, string>;
export declare const alarmStatusTranslations: Map<AlarmStatus, string>;
export declare const alarmSearchStatusTranslations: Map<AlarmSearchStatus, string>;
export declare const alarmSeverityColors: Map<AlarmSeverity, string>;
export interface Alarm extends BaseData<AlarmId> {
    tenantId: TenantId;
    customerId: CustomerId;
    type: string;
    originator: EntityId;
    severity: AlarmSeverity;
    status: AlarmStatus;
    startTs: number;
    endTs: number;
    ackTs: number;
    clearTs: number;
    propagate: boolean;
    details?: any;
}
export interface AlarmInfo extends Alarm {
    originatorName: string;
}
export interface AlarmDataInfo extends AlarmInfo {
    actionCellButtons?: TableCellButtonActionDescriptor[];
    hasActions?: boolean;
    [key: string]: any;
}
export declare const simulatedAlarm: AlarmInfo;
export interface AlarmField {
    keyName: string;
    value: string;
    name: string;
    time?: boolean;
}
export declare const alarmFields: {
    [fieldName: string]: AlarmField;
};
export declare class AlarmQuery {
    affectedEntityId: EntityId;
    pageLink: TimePageLink;
    searchStatus: AlarmSearchStatus;
    status: AlarmStatus;
    fetchOriginator: boolean;
    constructor(entityId: EntityId, pageLink: TimePageLink, searchStatus: AlarmSearchStatus, status: AlarmStatus, fetchOriginator: boolean);
    toQuery(): string;
}
