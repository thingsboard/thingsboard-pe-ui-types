import { PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class MillisecondsToTimeStringPipe implements PipeTransform {
    private translate;
    constructor(translate: TranslateService);
    transform(milliSeconds: number, shortFormat?: boolean, onlyFirstDigit?: boolean): string;
    private extractTimeUnits;
    private formatTimeString;
    static ɵfac: i0.ɵɵFactoryDeclaration<MillisecondsToTimeStringPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<MillisecondsToTimeStringPipe, "milliSecondsToTimeString", false>;
}
