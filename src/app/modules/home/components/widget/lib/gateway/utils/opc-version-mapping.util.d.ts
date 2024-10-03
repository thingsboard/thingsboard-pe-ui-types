import { DeviceConnectorMapping, LegacyDeviceConnectorMapping, LegacyServerConfig, OPCBasicConfig_v3_5_2, ServerConfig } from '@home/components/widget/lib/gateway/gateway-widget.models';
export declare class OpcVersionMappingUtil {
    static mapServerToUpgradedVersion(server: LegacyServerConfig): ServerConfig;
    static mapServerToDowngradedVersion(config: OPCBasicConfig_v3_5_2): LegacyServerConfig;
    static mapMappingToUpgradedVersion(mapping: LegacyDeviceConnectorMapping[]): DeviceConnectorMapping[];
    static mapMappingToDowngradedVersion(mapping: DeviceConnectorMapping[]): LegacyDeviceConnectorMapping[];
    private static getTypeSourceByValue;
    private static getDeviceNodeSourceByValue;
    private static getArgumentType;
}
