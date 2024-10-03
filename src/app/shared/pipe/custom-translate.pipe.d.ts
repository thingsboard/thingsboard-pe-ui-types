import { PipeTransform } from '@angular/core';
import { UtilsService } from '@core/services/utils.service';
import * as i0 from "@angular/core";
export declare class CustomTranslatePipe implements PipeTransform {
    private utils;
    constructor(utils: UtilsService);
    transform(translationValue: string, defaultValue?: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomTranslatePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<CustomTranslatePipe, "customTranslate", false>;
}
