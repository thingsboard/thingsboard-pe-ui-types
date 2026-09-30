import { AgentApplicationType } from '@shared/models/agent.models';
export type CredFieldType = 'text' | 'password' | 'select';
export interface CredField {
    key: string;
    labelKey: string;
    type: CredFieldType;
    options?: {
        value: string;
        labelKey: string;
    }[];
    showWhen?: {
        key: string;
        values: string[];
    };
}
export declare const CREDENTIAL_SCHEMAS: Partial<Record<AgentApplicationType, CredField[]>>;
export declare const MAIN_IMAGE_PATTERNS: Partial<Record<AgentApplicationType, RegExp>>;
export declare function credentialSchemaFor(type: AgentApplicationType | null | undefined): CredField[];
export declare function findMainServiceEnv(compose: any, type: AgentApplicationType | null | undefined): any | null;
export declare function extractCredentialValues(compose: any, type: AgentApplicationType | null | undefined): Record<string, string>;
export declare function applyCredentialValuesToCompose(compose: any, type: AgentApplicationType | null | undefined, values: Record<string, string>): void;
export declare function readCredentialValuesFromYaml(composeYaml: string, fallbackCompose: any, type: AgentApplicationType | null | undefined): Record<string, string>;
