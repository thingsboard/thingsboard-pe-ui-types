import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class RpcTemplateArrayViewPipe implements PipeTransform {
    transform(values: {
        value: string | boolean | number;
    }[]): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<RpcTemplateArrayViewPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<RpcTemplateArrayViewPipe, "getRpcTemplateArrayView", true>;
}
