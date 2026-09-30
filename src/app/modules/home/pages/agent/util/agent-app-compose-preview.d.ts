import { AgentApplication, AgentApplicationType, AgentAppTemplate } from '@shared/models/agent.models';
export declare function buildInstallMergeDraft(agentId: string, selectedType: AgentApplicationType, appName: string, template: AgentAppTemplate): AgentApplication;
export declare function buildUpdateMergeDraft(existingApplication: AgentApplication, template: AgentAppTemplate): AgentApplication;
export declare function buildRelatedMergeDraft(agentId: string, selectedType: AgentApplicationType, appName: string, template: AgentAppTemplate, composeYaml: string, fallbackCompose: any): AgentApplication;
