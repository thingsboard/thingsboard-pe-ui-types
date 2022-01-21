import { Type } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export interface SchedulerEventConfigType {
    name: string;
    componentType?: Type<ControlValueAccessor>;
    template?: string;
    originator?: boolean;
    msgType?: boolean;
    metadata?: boolean;
}
export declare const defaultSchedulerEventConfigTypes: {
    [eventType: string]: SchedulerEventConfigType;
};
