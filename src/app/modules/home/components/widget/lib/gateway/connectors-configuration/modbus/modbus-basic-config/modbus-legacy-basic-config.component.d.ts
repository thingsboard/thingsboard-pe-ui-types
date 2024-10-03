import { ModbusBasicConfig, ModbusLegacyBasicConfig } from '@home/components/widget/lib/gateway/gateway-widget.models';
import { ModbusBasicConfigDirective } from '@home/components/widget/lib/gateway/connectors-configuration/modbus/modbus-basic-config/modbus-basic-config.abstract';
import * as i0 from "@angular/core";
export declare class ModbusLegacyBasicConfigComponent extends ModbusBasicConfigDirective<ModbusBasicConfig, ModbusLegacyBasicConfig> {
    isLegacy: boolean;
    protected mapConfigToFormValue(config: ModbusLegacyBasicConfig): ModbusBasicConfig;
    protected getMappedValue(value: ModbusBasicConfig): ModbusLegacyBasicConfig;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModbusLegacyBasicConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ModbusLegacyBasicConfigComponent, "tb-modbus-legacy-basic-config", never, {}, {}, never, never, true, never>;
}
