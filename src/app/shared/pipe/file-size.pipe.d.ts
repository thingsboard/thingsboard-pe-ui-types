import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
declare type unit = 'bytes' | 'KB' | 'MB' | 'GB' | 'TB' | 'PB';
declare type unitPrecisionMap = {
    [u in unit]: number;
};
export declare class FileSizePipe implements PipeTransform {
    private readonly units;
    transform(bytes?: number, precision?: number | unitPrecisionMap): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<FileSizePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<FileSizePipe, "fileSize", false>;
}
export {};
