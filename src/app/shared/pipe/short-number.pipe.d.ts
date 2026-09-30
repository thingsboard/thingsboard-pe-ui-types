import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export interface ShortNumberArgs {
    long?: boolean;
    roundDown?: boolean;
}
export declare class ShortNumberPipe implements PipeTransform {
    transform(number: number, args?: ShortNumberArgs): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ShortNumberPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ShortNumberPipe, "shortNumber", false>;
}
