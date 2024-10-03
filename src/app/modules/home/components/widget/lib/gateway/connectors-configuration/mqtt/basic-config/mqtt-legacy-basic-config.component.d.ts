import { MQTTBasicConfig_v3_5_2, MQTTLegacyBasicConfig } from '@home/components/widget/lib/gateway/gateway-widget.models';
import { MqttBasicConfigDirective } from '@home/components/widget/lib/gateway/connectors-configuration/mqtt/basic-config/mqtt-basic-config.abstract';
import * as i0 from "@angular/core";
export declare class MqttLegacyBasicConfigComponent extends MqttBasicConfigDirective<MQTTLegacyBasicConfig> {
    protected mapConfigToFormValue(config: MQTTLegacyBasicConfig): MQTTBasicConfig_v3_5_2;
    protected getMappedValue(basicConfig: MQTTBasicConfig_v3_5_2): MQTTLegacyBasicConfig;
    static ɵfac: i0.ɵɵFactoryDeclaration<MqttLegacyBasicConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MqttLegacyBasicConfigComponent, "tb-mqtt-legacy-basic-config", never, {}, {}, never, never, true, never>;
}
