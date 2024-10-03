import { GatewayConnector, ModbusBasicConfig, ModbusBasicConfig_v3_5_2, ModbusLegacyBasicConfig } from '../gateway-widget.models';
import { GatewayConnectorVersionProcessor } from './gateway-connector-version-processor.abstract';
export declare class ModbusVersionProcessor extends GatewayConnectorVersionProcessor<any> {
    protected gatewayVersionIn: string;
    protected connector: GatewayConnector<ModbusBasicConfig>;
    constructor(gatewayVersionIn: string, connector: GatewayConnector<ModbusBasicConfig>);
    getUpgradedVersion(): GatewayConnector<ModbusBasicConfig_v3_5_2>;
    getDowngradedVersion(): GatewayConnector<ModbusLegacyBasicConfig>;
}
