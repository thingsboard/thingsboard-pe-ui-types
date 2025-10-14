import { BaseData, ExportableEntity } from '@shared/models/base-data';
import { HasTenantId } from '@shared/models/entity.models';
import { AiModelId } from '@shared/models/id/ai-model-id';
export interface AiModel extends Omit<BaseData<AiModelId>, 'label'>, HasTenantId, ExportableEntity<AiModelId> {
    modelType: ModelType;
    configuration: {
        provider: AiProvider;
        providerConfig: {
            apiKey?: string;
            personalAccessToken?: string;
            endpoint?: string;
            serviceVersion?: string;
            projectId?: string;
            location?: string;
            serviceAccountKey?: string;
            fileName?: string;
            region?: string;
            accessKeyId?: string;
            secretAccessKey?: string;
            baseUrl?: string;
            auth?: {
                type: AuthenticationType;
                username?: string;
                password?: string;
                token?: string;
            };
        };
        modelId: string;
        temperature?: number;
        topP?: number;
        topK?: number;
        frequencyPenalty?: number;
        presencePenalty?: number;
        maxOutputTokens?: number;
        contextLength?: number;
    };
}
export declare enum ModelType {
    CHAT = "CHAT"
}
export declare enum AiProvider {
    OPENAI = "OPENAI",
    AZURE_OPENAI = "AZURE_OPENAI",
    GOOGLE_AI_GEMINI = "GOOGLE_AI_GEMINI",
    GOOGLE_VERTEX_AI_GEMINI = "GOOGLE_VERTEX_AI_GEMINI",
    MISTRAL_AI = "MISTRAL_AI",
    ANTHROPIC = "ANTHROPIC",
    AMAZON_BEDROCK = "AMAZON_BEDROCK",
    GITHUB_MODELS = "GITHUB_MODELS",
    OLLAMA = "OLLAMA"
}
export declare const AiProviderTranslations: Map<AiProvider, string>;
export declare const ProviderFieldsAllList: string[];
export declare const ModelFieldsAllList: string[];
export declare const AiModelMap: Map<AiProvider, {
    modelList: string[];
    providerFieldsList: string[];
    modelFieldsList: string[];
}>;
export declare const AiRuleNodeResponseFormatTypeOnlyText: AiProvider[];
export declare enum ResponseFormat {
    TEXT = "TEXT",
    JSON = "JSON",
    JSON_SCHEMA = "JSON_SCHEMA"
}
export interface AiModelWithUserMsg {
    userMessage: {
        contents: Array<{
            contentType: string;
            text: string;
        }>;
    };
    chatModelConfig: {
        modelType: string;
        provider: AiProvider;
        providerConfig: {
            apiKey?: string;
            personalAccessToken?: string;
            endpoint?: string;
            serviceVersion?: string;
            projectId?: string;
            location?: string;
            serviceAccountKey?: string;
            fileName?: string;
            baseUrl?: string;
        };
        modelId: string;
        maxRetries: number;
        timeoutSeconds: number;
    };
}
export interface CheckConnectivityResult {
    status: string;
    errorDetails: string;
}
export declare enum AuthenticationType {
    NONE = "NONE",
    BASIC = "BASIC",
    TOKEN = "TOKEN"
}
