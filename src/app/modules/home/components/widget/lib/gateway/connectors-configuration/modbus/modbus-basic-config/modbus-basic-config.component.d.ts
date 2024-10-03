import { ModbusBasicConfig_v3_5_2 } from '@home/components/widget/lib/gateway/gateway-widget.models';
import { ModbusBasicConfigDirective } from '@home/components/widget/lib/gateway/connectors-configuration/modbus/modbus-basic-config/modbus-basic-config.abstract';
import * as i0 from "@angular/core";
export declare class ModbusBasicConfigComponent extends ModbusBasicConfigDirective<ModbusBasicConfig_v3_5_2, ModbusBasicConfig_v3_5_2> {
    isLegacy: boolean;
    protected mapConfigToFormValue({ master, slave }: ModbusBasicConfig_v3_5_2): ModbusBasicConfig_v3_5_2;
    protected getMappedValue(value: ModbusBasicConfig_v3_5_2): ModbusBasicConfig_v3_5_2;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModbusBasicConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ModbusBasicConfigComponent, "tb-modbus-basic-config", never, {}, {}, never, never, true, never>;
}
