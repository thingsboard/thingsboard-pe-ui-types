import { FormGroup } from '@angular/forms';
import { MappingType, OPCBasicConfig_v3_5_2, OPCLegacyBasicConfig } from '@home/components/widget/lib/gateway/gateway-widget.models';
import { GatewayConnectorBasicConfigDirective } from '@home/components/widget/lib/gateway/abstract/gateway-connector-basic-config.abstract';
import * as i0 from "@angular/core";
export declare class OpcUaLegacyBasicConfigComponent extends GatewayConnectorBasicConfigDirective<OPCBasicConfig_v3_5_2, OPCLegacyBasicConfig> {
    mappingTypes: typeof MappingType;
    isLegacy: boolean;
    protected initBasicFormGroup(): FormGroup;
    protected mapConfigToFormValue(config: OPCLegacyBasicConfig): OPCBasicConfig_v3_5_2;
    protected getMappedValue(value: OPCBasicConfig_v3_5_2): OPCLegacyBasicConfig;
    static ɵfac: i0.ɵɵFactoryDeclaration<OpcUaLegacyBasicConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OpcUaLegacyBasicConfigComponent, "tb-opc-ua-legacy-basic-config", never, {}, {}, never, never, true, never>;
}
