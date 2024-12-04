import { PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MillisecondsToTimeStringPipe } from './milliseconds-to-time-string.pipe';
import * as i0 from "@angular/core";
export declare class DurationLeftPipe implements PipeTransform {
    private translate;
    private millisecondsToTimeString;
    constructor(translate: TranslateService, millisecondsToTimeString: MillisecondsToTimeStringPipe);
    transform(untilTimestamp: number, shortFormat?: boolean, onlyFirstDigit?: boolean): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<DurationLeftPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<DurationLeftPipe, "durationLeft", true>;
}
