import { SchedulerEventConfiguration } from '@shared/models/scheduler-event.models';
export interface EmailConfig {
    from: string;
    to: string;
    cc?: string;
    bcc?: string;
    subject: string;
    body: string;
}
export declare const sendRPCRequestDefaults: SchedulerEventConfiguration;
export declare const updateAttributesDefaults: SchedulerEventConfiguration;
export declare const defaultEmailConfig: EmailConfig;
export declare const safeMerge: <T>(defaults: T | {
    [key: string]: any;
}, value: Partial<T> | {
    [key: string]: any;
} | null) => T;
