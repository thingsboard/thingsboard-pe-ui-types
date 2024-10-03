import { ConverterConnectorMapping, LegacyConverterConnectorMapping, LegacyRequestMappingData, RequestMappingData, RequestType } from '@home/components/widget/lib/gateway/gateway-widget.models';
export declare class MqttVersionMappingUtil {
    static readonly mqttRequestTypeKeys: RequestType[];
    static readonly mqttRequestMappingOldFields: string[];
    static readonly mqttRequestMappingNewFields: string[];
    static mapMappingToUpgradedVersion(mapping: LegacyConverterConnectorMapping[]): ConverterConnectorMapping[];
    static mapRequestsToUpgradedVersion(requestMapping: Record<RequestType, LegacyRequestMappingData[]>): Record<RequestType, RequestMappingData[]>;
    static mapRequestsToDowngradedVersion(requestsMapping: Record<RequestType, RequestMappingData[]>): Record<RequestType, LegacyRequestMappingData[]>;
    static mapMappingToDowngradedVersion(mapping: ConverterConnectorMapping[]): LegacyConverterConnectorMapping[];
    private static mapConverterToDowngradedVersion;
    private static cleanUpOldFields;
    private static cleanUpNewFields;
    private static getTypeSourceByValue;
    private static extractConverterDeviceInfo;
    private static mapRequestToUpgradedVersion;
}
