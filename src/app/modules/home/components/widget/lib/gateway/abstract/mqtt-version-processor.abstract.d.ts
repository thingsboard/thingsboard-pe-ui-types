import { GatewayConnector, MQTTBasicConfig, MQTTBasicConfig_v3_5_2, MQTTLegacyBasicConfig } from '../gateway-widget.models';
import { GatewayConnectorVersionProcessor } from './gateway-connector-version-processor.abstract';
export declare class MqttVersionProcessor extends GatewayConnectorVersionProcessor<MQTTBasicConfig> {
    protected gatewayVersionIn: string;
    protected connector: GatewayConnector<MQTTBasicConfig>;
    private readonly mqttRequestTypeKeys;
    constructor(gatewayVersionIn: string, connector: GatewayConnector<MQTTBasicConfig>);
    getUpgradedVersion(): GatewayConnector<MQTTBasicConfig_v3_5_2>;
    getDowngradedVersion(): GatewayConnector<MQTTLegacyBasicConfig>;
    private cleanUpConfigJson;
}
