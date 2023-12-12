import { SchedulerEventConfiguration } from '@shared/models/scheduler-event.models';
export declare const sendRPCRequestDefaults: SchedulerEventConfiguration;
export declare const safeMerge: (defaults: SchedulerEventConfiguration | {
    [key: string]: any;
}, value: SchedulerEventConfiguration | {
    [key: string]: any;
}) => SchedulerEventConfiguration;
