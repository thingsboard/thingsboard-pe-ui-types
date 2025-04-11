export declare const maxDeduplicateTimeSecs: number;
export interface TimeseriesNodeConfiguration {
    processingSettings: ProcessingSettings;
    defaultTTL: number;
    useServerTs: boolean;
}
export interface TimeseriesNodeConfigurationForm extends Omit<TimeseriesNodeConfiguration, 'processingSettings'> {
    processingSettings: ProcessingSettingsForm;
}
export type ProcessingSettings = BasicProcessingSettings & Partial<DeduplicateProcessingStrategy> & Partial<AdvancedProcessingStrategy>;
export type ProcessingSettingsForm = Omit<ProcessingSettings, keyof AdvancedProcessingStrategy> & {
    isAdvanced: boolean;
    advanced?: Partial<AdvancedProcessingStrategy>;
    type: ProcessingType;
};
export declare enum ProcessingType {
    ON_EVERY_MESSAGE = "ON_EVERY_MESSAGE",
    DEDUPLICATE = "DEDUPLICATE",
    WEBSOCKETS_ONLY = "WEBSOCKETS_ONLY",
    ADVANCED = "ADVANCED",
    SKIP = "SKIP"
}
export declare const ProcessingTypeTranslationMap: Map<ProcessingType, string>;
export interface BasicProcessingSettings {
    type: ProcessingType;
}
export interface DeduplicateProcessingStrategy extends BasicProcessingSettings {
    deduplicationIntervalSecs: number;
}
export interface AdvancedProcessingStrategy extends BasicProcessingSettings {
    timeseries: AdvancedProcessingConfig;
    latest: AdvancedProcessingConfig;
    webSockets: AdvancedProcessingConfig;
    calculatedFields: AdvancedProcessingConfig;
}
export type AdvancedProcessingConfig = WithOptional<DeduplicateProcessingStrategy, 'deduplicationIntervalSecs'>;
export declare const defaultAdvancedProcessingConfig: AdvancedProcessingConfig;
export declare const defaultAdvancedProcessingStrategy: Omit<AdvancedProcessingStrategy, 'type'>;
