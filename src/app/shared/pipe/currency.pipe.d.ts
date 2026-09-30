import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TbCurrencyPipe implements PipeTransform {
    constructor();
    transform(amount: number, args?: any): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbCurrencyPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<TbCurrencyPipe, "tbCurrency", false>;
}
