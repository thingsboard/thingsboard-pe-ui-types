import { EntityId } from '@shared/models/id/entity-id';
import { AgentApplication, AgentAppEvent, AgentApplicationType, AgentInfo, AgentApplicationInfo } from '@shared/models/agent.models';
export interface AgentAppInstallWizardData {
    agentId?: string;
    agent?: AgentInfo | null;
    mode?: 'install' | 'update' | 'upgrade';
    application?: AgentApplicationInfo;
    lockedType?: AgentApplicationType;
    lockedRelatedEntity?: EntityId;
    navigateToAgentOnFinish?: boolean;
    selectAgent?: boolean;
    showBack?: boolean;
}
export interface AgentAppUpgradeResult {
    profileOnly: true;
}
export type AgentAppInstallWizardResult = AgentAppEvent | AgentAppUpgradeResult | null;
export declare function isAgentAppUpgradeResult(result: AgentAppInstallWizardResult): result is AgentAppUpgradeResult;
export interface AgentAppWizardFinish {
    event: AgentAppEvent | null;
    application?: AgentApplication | null;
    closeOnly?: boolean;
}
export interface AgentTypeCard {
    type: AgentApplicationType;
    icon: string;
    labelKey: string;
    descKey: string;
}
