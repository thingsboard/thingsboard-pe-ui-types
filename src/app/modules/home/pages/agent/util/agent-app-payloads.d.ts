import { AgentApplication, AgentApplicationType, AgentAppProfile, AgentAppTemplate } from '@shared/models/agent.models';
export interface UpgradePayloadOpts {
    existingApplication: AgentApplication;
    template: AgentAppTemplate;
    profileBound: boolean;
    selectedType: AgentApplicationType | null;
    credentialValues: Record<string, string>;
    composeYaml: string;
    mergedApp: AgentApplication | null;
}
export declare function buildUpgradeApplication(opts: UpgradePayloadOpts): AgentApplication;
export interface UpdatePayloadOpts {
    existingApplication: AgentApplication;
    appName: string;
    composeYaml: string;
    mergedApp: AgentApplication | null;
    composeType?: string;
}
export declare function buildUpdateApplication(opts: UpdatePayloadOpts): AgentApplication;
export interface InstallPayloadOpts {
    selectedType: AgentApplicationType | null;
    agentId: string;
    appName: string;
    composeYaml: string;
    mergedApp: AgentApplication | null;
    template: AgentAppTemplate | null;
    useProfile: boolean;
    selectedProfile: AgentAppProfile | null;
    composeType?: string;
}
export declare function buildInstallApplication(opts: InstallPayloadOpts): AgentApplication;
