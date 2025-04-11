import { AttributeScope } from '@shared/models/telemetry/telemetry.models';
import { BasicProcessingSettings, ProcessingType } from '@home/components/rule-node/action/timeseries-config.models';
export interface AttributeNodeConfiguration {
    processingSettings: AttributeProcessingSettings;
    scope: AttributeScope;
    notifyDevice: boolean;
    sendAttributesUpdatedNotification: boolean;
    updateAttributesOnlyOnValueChange: boolean;
}
export interface AttributeNodeConfigurationForm extends Omit<AttributeNodeConfiguration, 'processingSettings'> {
    processingSettings: AttributeProcessingSettingsForm;
}
export type AttributeProcessingSettings = BasicProcessingSettings & Partial<AttributeDeduplicateProcessingStrategy> & Partial<AttributeAdvancedProcessingStrategy>;
export type AttributeProcessingSettingsForm = Omit<AttributeProcessingSettings, keyof AttributeAdvancedProcessingStrategy> & {
    isAdvanced: boolean;
    advanced?: Partial<AttributeAdvancedProcessingStrategy>;
    type: ProcessingType;
};
export interface AttributeDeduplicateProcessingStrategy extends BasicProcessingSettings {
    deduplicationIntervalSecs: number;
}
export interface AttributeAdvancedProcessingStrategy extends BasicProcessingSettings {
    attributes: AttributeAdvancedProcessingConfig;
    webSockets: AttributeAdvancedProcessingConfig;
    calculatedFields: AttributeAdvancedProcessingConfig;
}
export type AttributeAdvancedProcessingConfig = WithOptional<AttributeDeduplicateProcessingStrategy, 'deduplicationIntervalSecs'>;
export declare const defaultAdvancedProcessingConfig: AttributeAdvancedProcessingConfig;
export declare const defaultAttributeAdvancedProcessingStrategy: Omit<AttributeAdvancedProcessingStrategy, 'type'>;
