import { PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class DateAgoPipe implements PipeTransform {
    private translate;
    constructor(translate: TranslateService);
    transform(value: string | number | Date, args?: any): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<DateAgoPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<DateAgoPipe, "dateAgo", false>;
}
