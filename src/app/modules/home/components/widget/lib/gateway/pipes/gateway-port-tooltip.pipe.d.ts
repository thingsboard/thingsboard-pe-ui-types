import { PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class GatewayPortTooltipPipe implements PipeTransform {
    private translate;
    constructor(translate: TranslateService);
    transform(portControl: AbstractControl): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<GatewayPortTooltipPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<GatewayPortTooltipPipe, "getGatewayPortTooltip", true>;
}
