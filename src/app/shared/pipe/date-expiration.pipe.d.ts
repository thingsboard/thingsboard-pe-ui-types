import { PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MillisecondsToTimeStringPipe } from '@shared/pipe/milliseconds-to-time-string.pipe';
import * as i0 from "@angular/core";
export declare class DateExpirationPipe implements PipeTransform {
    private millisecondsToTimeString;
    private datePipe;
    constructor(millisecondsToTimeString: MillisecondsToTimeStringPipe, datePipe: DatePipe);
    transform(expirationMs: number, arg?: any): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<DateExpirationPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<DateExpirationPipe, "dateExpiration", false>;
}
