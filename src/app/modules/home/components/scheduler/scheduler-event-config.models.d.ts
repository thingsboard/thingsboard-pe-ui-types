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
