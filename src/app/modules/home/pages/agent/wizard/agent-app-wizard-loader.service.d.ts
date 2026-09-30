import { Observable } from 'rxjs';
import { AgentService } from '@core/http/agent.service';
import { EntityId } from '@shared/models/id/entity-id';
import { AgentApplication, AgentAppEventActionType, AgentAppProfile, AgentApplicationType, AgentAppTemplate, VirtualAgentAppProfile } from '@shared/models/agent.models';
import * as i0 from "@angular/core";
export interface UpgradeTemplateResult {
    template: AgentAppTemplate;
    sourceTemplate: AgentAppTemplate;
    fromVersion: string | null;
}
export interface UpgradeResolveError {
    messageKey: string;
}
export declare class AgentAppWizardLoaderService {
    private agentService;
    private templateCache;
    private templateByVersionCache;
    private templatesByTypeCache;
    private profilesCache;
    constructor(agentService: AgentService);
    prewarmTemplates(types: AgentApplicationType[]): void;
    loadTemplate(type: AgentApplicationType): Observable<AgentAppTemplate>;
    loadTemplateByVersion(appType: AgentApplicationType, version: string, configType?: string): Observable<AgentAppTemplate>;
    loadTemplatesByType(type: AgentApplicationType): Observable<AgentAppTemplate[]>;
    materializeProfile(profile: VirtualAgentAppProfile): Observable<AgentAppProfile>;
    loadProfiles(type: AgentApplicationType): Observable<AgentAppProfile[]>;
    cacheProfiles(type: AgentApplicationType, profiles: AgentAppProfile[]): void;
    loadProfileById(id: string): Observable<AgentAppProfile>;
    merge(templateVersion: string, appType: AgentApplicationType, draft: AgentApplication, composeType?: string, relatedEntityId?: EntityId, actionType?: AgentAppEventActionType, setHostValues?: boolean): Observable<AgentApplication>;
    loadManagedApp(entityType: string, entityId: string): Observable<AgentApplication | null>;
    resolveUpgradeTemplate(app: AgentApplication): Observable<UpgradeTemplateResult>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AgentAppWizardLoaderService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AgentAppWizardLoaderService>;
}
