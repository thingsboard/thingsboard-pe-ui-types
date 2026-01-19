export interface TrendzSummary {
    metricSummaryItems: MetricSummaryItem[];
    anomalyModelSummaryItems: AnomalyModelSummaryItem[];
    calculationFieldSummaryItems: CalculationFieldSummaryItem[];
    predictionModelSummaryItems: PredictionModelSummaryItem[];
    viewSummaryItems: ViewSummaryItem[];
    aiSummaryItems: AiSummaryItem[];
}
export interface BaseTrendzSummaryItem {
    entityId: string;
    entityName: string;
    updatedTs: number;
}
export interface MetricSummaryItem extends BaseTrendzSummaryItem {
    itemId: string;
    itemName: string;
    metricData: {
        metricId: string;
        metricName: string;
    };
    fieldData: {
        fieldId: string;
        fieldName: string;
        fieldType: string;
    };
}
export interface AnomalyModelSummaryItem extends BaseTrendzSummaryItem {
    modelName: string;
    enabled: boolean;
    modelId: string;
}
export interface CalculationFieldSummaryItem extends BaseTrendzSummaryItem {
    calculationName: string;
    enabled: boolean;
    calculationId: string;
}
export interface PredictionModelSummaryItem extends BaseTrendzSummaryItem {
    modelName: string;
    enabled: boolean;
    modelId: string;
}
export interface ViewSummaryItem extends BaseTrendzSummaryItem {
    viewName: string;
    viewType: string;
    viewConfigId: string;
}
export interface AiSummaryItem extends BaseTrendzSummaryItem {
    chatSummary: string;
    lastMessage: string;
    messageCount: number;
    chatId: string;
}
export interface TrendzSummaryItemParam {
    name: string;
    enabled?: boolean;
    updatedTs?: number;
    entityId?: string;
    itemId?: string;
}
export interface BaseTrendzSyncInfo {
    type: TrendzSynchronizationResultType;
    status: TrendzSynchronizationStatus;
    version: string;
}
export interface TrendzSynchronization extends BaseTrendzSyncInfo {
    updatedTs: number;
}
export interface TrendzHealthcheckResult extends BaseTrendzSyncInfo {
    message: string;
}
export interface TrendzStatus {
    type: TrendzSynchronizationResultType;
    syncStatus: TrendzSynchronizationStatus;
    healthcheckStatus: TrendzSynchronizationStatus;
}
export declare enum TrendzSynchronizationStatus {
    NOT_AVAILABLE = "NOT_AVAILABLE",
    AVAILABLE = "AVAILABLE",
    SYNCED = "SYNCED"
}
export declare enum TrendzSynchronizationResultType {
    SYNC_NOT_INITIALIZED = "SYNC_NOT_INITIALIZED",
    SYNC_COMPLETED = "SYNC_COMPLETED",
    SYNC_DISABLED = "SYNC_DISABLED",
    TRENDZ_UNSUPPORTED_VERSION = "TRENDZ_UNSUPPORTED_VERSION",
    TRENDZ_AUTH_INVALID = "TRENDZ_AUTH_INVALID",
    TRENDZ_URL_UNREACHABLE = "TRENDZ_URL_UNREACHABLE",
    TB_URL_MISMATCH = "TB_URL_MISMATCH",
    TB_URL_UNREACHABLE = "TB_URL_UNREACHABLE",
    TB_AUTH_INVALID = "TB_AUTH_INVALID",
    SYNC_INTERNAL_ERROR = "SYNC_INTERNAL_ERROR"
}
export declare const TrendzSynchronizationResultTypeTranslationMap: Map<TrendzSynchronizationResultType, string>;
export declare enum TrendzViewType {
    BAR = "trendz-analytics.view-type.bar",
    LINE = "trendz-analytics.view-type.line",
    TABLE = "trendz-analytics.view-type.table",
    HEATMAP = "trendz-analytics.view-type.heatmap",
    HEATMAP_CALENDAR = "trendz-analytics.view-type.heatmap-calendar",
    PIE = "trendz-analytics.view-type.pie",
    SCATTER_PLOT = "trendz-analytics.view-type.scatter-plot",
    CARD = "trendz-analytics.view-type.card",
    CARD_WITH_LINE = "trendz-analytics.view-type.card-with-line",
    AI_CARD = "trendz-analytics.view-type.ai-card"
}
export declare const getMetricLink: (metric: MetricSummaryItem) => string;
export interface TrendzConfiguration {
    trendzUrl: string;
    tbUrl: string;
}
