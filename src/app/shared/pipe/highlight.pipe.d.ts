import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class HighlightPipe implements PipeTransform {
    transform(text: string, search: string, includes?: boolean, flags?: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<HighlightPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<HighlightPipe, "highlight", false>;
}
