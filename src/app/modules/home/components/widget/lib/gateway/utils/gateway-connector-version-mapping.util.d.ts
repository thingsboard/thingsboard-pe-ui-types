import { GatewayConnector } from '@home/components/widget/lib/gateway/gateway-widget.models';
export declare abstract class GatewayConnectorVersionMappingUtil {
    static getConfig(connector: GatewayConnector, gatewayVersion: string): GatewayConnector;
    static parseVersion(version: string | number): number;
}
