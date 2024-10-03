import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class LatestVersionConfigPipe implements PipeTransform {
    transform(configVersion: number | string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<LatestVersionConfigPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<LatestVersionConfigPipe, "isLatestVersionConfig", true>;
}
