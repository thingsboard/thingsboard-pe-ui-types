import { GatewayConnector } from '@home/components/widget/lib/gateway/gateway-widget.models';
export declare abstract class GatewayConnectorVersionProcessor<BasicConfig> {
    protected gatewayVersionIn: string | number;
    protected connector: GatewayConnector<BasicConfig>;
    gatewayVersion: number;
    configVersion: number;
    protected constructor(gatewayVersionIn: string | number, connector: GatewayConnector<BasicConfig>);
    getProcessedByVersion(): GatewayConnector<BasicConfig>;
    private processVersionUpdate;
    private isVersionUpdateNeeded;
    private isVersionUpgradeNeeded;
    private isVersionDowngradeNeeded;
    protected abstract getDowngradedVersion(): GatewayConnector<BasicConfig>;
    protected abstract getUpgradedVersion(): GatewayConnector<BasicConfig>;
}
