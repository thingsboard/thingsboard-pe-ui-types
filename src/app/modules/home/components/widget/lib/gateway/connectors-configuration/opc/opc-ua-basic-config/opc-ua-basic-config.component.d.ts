import { FormGroup } from '@angular/forms';
import { MappingType, OPCBasicConfig_v3_5_2 } from '@home/components/widget/lib/gateway/gateway-widget.models';
import { GatewayConnectorBasicConfigDirective } from '@home/components/widget/lib/gateway/abstract/gateway-connector-basic-config.abstract';
import * as i0 from "@angular/core";
export declare class OpcUaBasicConfigComponent extends GatewayConnectorBasicConfigDirective<OPCBasicConfig_v3_5_2, OPCBasicConfig_v3_5_2> {
    mappingTypes: typeof MappingType;
    isLegacy: boolean;
    protected initBasicFormGroup(): FormGroup;
    protected mapConfigToFormValue(config: OPCBasicConfig_v3_5_2): OPCBasicConfig_v3_5_2;
    protected getMappedValue(value: OPCBasicConfig_v3_5_2): OPCBasicConfig_v3_5_2;
    static ɵfac: i0.ɵɵFactoryDeclaration<OpcUaBasicConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OpcUaBasicConfigComponent, "tb-opc-ua-basic-config", never, {}, {}, never, never, true, never>;
}
