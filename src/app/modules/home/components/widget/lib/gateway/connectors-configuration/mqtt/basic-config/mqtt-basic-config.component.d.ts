import { MQTTBasicConfig_v3_5_2 } from '@home/components/widget/lib/gateway/gateway-widget.models';
import { MqttBasicConfigDirective } from '@home/components/widget/lib/gateway/connectors-configuration/mqtt/basic-config/mqtt-basic-config.abstract';
import * as i0 from "@angular/core";
export declare class MqttBasicConfigComponent extends MqttBasicConfigDirective<MQTTBasicConfig_v3_5_2> {
    protected mapConfigToFormValue(basicConfig: MQTTBasicConfig_v3_5_2): MQTTBasicConfig_v3_5_2;
    protected getMappedValue(basicConfig: MQTTBasicConfig_v3_5_2): MQTTBasicConfig_v3_5_2;
    static ɵfac: i0.ɵɵFactoryDeclaration<MqttBasicConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MqttBasicConfigComponent, "tb-mqtt-basic-config", never, {}, {}, never, never, true, never>;
}
