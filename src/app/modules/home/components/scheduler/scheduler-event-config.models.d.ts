import { Type } from '@angular/core';
import { ControlValueAccessor, Validator } from '@angular/forms';
export interface SchedulerEventConfigType {
    name: string;
    componentType?: Type<ControlValueAccessor & Validator>;
    template?: string;
    originator?: boolean;
    msgType?: boolean;
    metadata?: boolean;
    clearMsgBody?: boolean;
    clearMetadata?: boolean;
    clearOriginator?: boolean;
    clearMsgType?: boolean;
}
export declare const defaultSchedulerEventConfigTypes: {
    [eventType: string]: SchedulerEventConfigType;
};
/**
 * The scheduler event types that produce a report. A scheduler event of one of these types keeps generating
 * reports on its own schedule once saved, so it is a reporting write and is offered only while the reporting
 * feature is granted. Mirrors DataConstants.GENERATE_REPORT / GENERATE_DASHBOARD_REPORT on the server, which
 * refuses saving them for the same reason.
 */
export declare const reportSchedulerEventTypes: string[];
