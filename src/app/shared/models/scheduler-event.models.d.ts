import { BaseData } from '@shared/models/base-data';
import { TenantId } from '@shared/models/id/tenant-id';
import { CustomerId } from '@shared/models/id/customer-id';
import { SchedulerEventId } from '@shared/models/id/scheduler-event-id';
import { EntityId } from '@shared/models/id/entity-id';
import * as moment_ from 'moment';
export declare enum SchedulerRepeatType {
    DAILY = "DAILY",
    EVERY_N_DAYS = "EVERY_N_DAYS",
    WEEKLY = "WEEKLY",
    EVERY_N_WEEKS = "EVERY_N_WEEKS",
    MONTHLY = "MONTHLY",
    YEARLY = "YEARLY",
    TIMER = "TIMER"
}
export declare const schedulerRepeatTypeTranslationMap: Map<SchedulerRepeatType, string>;
export declare const schedulerRepeatTypeToUnitMap: Map<SchedulerRepeatType, moment_.unitOfTime.Base>;
export declare enum SchedulerTimeUnit {
    HOURS = "HOURS",
    MINUTES = "MINUTES",
    SECONDS = "SECONDS"
}
export declare const schedulerTimeUnitToUnitMap: Map<SchedulerTimeUnit, moment_.unitOfTime.Base>;
export declare const schedulerTimeUnitTranslationMap: Map<SchedulerTimeUnit, string>;
export declare const schedulerTimeUnitRepeatTranslationMap: Map<SchedulerTimeUnit, string>;
export declare const schedulerWeekday: string[];
export interface SchedulerEventSchedule {
    timezone?: string;
    startTime?: number;
    repeat?: {
        type: SchedulerRepeatType;
        endsOn: number;
        repeatOn?: number[];
        days?: number;
        weeks?: number;
        repeatInterval?: number;
        timeUnit?: SchedulerTimeUnit;
    };
}
export interface SchedulerEventInfo extends BaseData<SchedulerEventId> {
    tenantId?: TenantId;
    customerId?: CustomerId;
    originatorId?: EntityId;
    name: string;
    type: string;
    enabled?: boolean;
    schedule: SchedulerEventSchedule;
    additionalInfo?: any;
}
export interface SchedulerEventWithCustomerInfo extends SchedulerEventInfo {
    customerTitle: string;
    customerIsPublic: boolean;
    typeName?: string;
}
export interface SchedulerEventConfiguration {
    originatorId?: EntityId;
    msgType?: string;
    msgBody?: any;
    metadata?: any;
}
export interface SchedulerEvent extends SchedulerEventInfo {
    configuration: SchedulerEventConfiguration;
}
