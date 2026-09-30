import { AgentAppConfig, AgentAppTemplate } from '@shared/models/agent.models';
export declare function dumpYaml(value: any, indent?: number): string;
export declare function dumpCompose(source: {
    config?: AgentAppConfig;
} | null | undefined): string;
export declare function composeTypeLabelKey(composeType: string): string | null;
export declare function composeTemplateKeys(template: AgentAppTemplate | null | undefined): string[];
export declare function dumpRawTemplateCompose(template: AgentAppTemplate, composeType?: string): string;
export declare function pickComposeType(template: AgentAppTemplate): string;
export declare function parseComposeYaml(yaml: string, fallbackCompose?: any): any;
