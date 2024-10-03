import { LegacySlaveConfig, ModbusLegacySlave, ModbusMasterConfig, ModbusSlave } from '@home/components/widget/lib/gateway/gateway-widget.models';
export declare class ModbusVersionMappingUtil {
    static mapMasterToUpgradedVersion(master: ModbusMasterConfig<LegacySlaveConfig>): ModbusMasterConfig;
    static mapMasterToDowngradedVersion(master: ModbusMasterConfig): ModbusMasterConfig<LegacySlaveConfig>;
    static mapSlaveToDowngradedVersion(slave: ModbusSlave): ModbusLegacySlave;
    static mapSlaveToUpgradedVersion(slave: ModbusLegacySlave): ModbusSlave;
    private static mapValuesToUpgradedVersion;
}
