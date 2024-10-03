import { PipeTransform } from '@angular/core';
import { MappingValueType, OPCUaSourceType, SourceType } from '@home/components/widget/lib/gateway/gateway-widget.models';
import * as i0 from "@angular/core";
export declare class GatewayHelpLinkPipe implements PipeTransform {
    transform(field: string, sourceType: SourceType | OPCUaSourceType, sourceTypes?: Array<SourceType | OPCUaSourceType | MappingValueType>): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<GatewayHelpLinkPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<GatewayHelpLinkPipe, "getGatewayHelpLink", true>;
}
