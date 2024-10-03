import { GatewayConnector, OPCBasicConfig, OPCBasicConfig_v3_5_2, OPCLegacyBasicConfig } from '../gateway-widget.models';
import { GatewayConnectorVersionProcessor } from './gateway-connector-version-processor.abstract';
export declare class OpcVersionProcessor extends GatewayConnectorVersionProcessor<OPCBasicConfig> {
    protected gatewayVersionIn: string;
    protected connector: GatewayConnector<OPCBasicConfig>;
    constructor(gatewayVersionIn: string, connector: GatewayConnector<OPCBasicConfig>);
    getUpgradedVersion(): GatewayConnector<OPCBasicConfig_v3_5_2>;
    getDowngradedVersion(): GatewayConnector<OPCLegacyBasicConfig>;
}
