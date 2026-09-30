import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { AgentAppProfile, AgentApplicationType, AgentAppTemplate } from '@shared/models/agent.models';
import * as i0 from "@angular/core";
export declare const MIN_ADD_ON_EDGE_VERSION: number[];
export declare function isEdgeVersionSupported(appType: AgentApplicationType, version: string | undefined | null, addOnEdge: boolean): boolean;
export declare class EdgeTemplateCompatibilityService {
    private store;
    constructor(store: Store<AppState>);
    isAddOnEdgeByDefault(): boolean;
    filterTemplates(templates: AgentAppTemplate[], addOnEdge?: boolean): AgentAppTemplate[];
    filterProfiles<T extends AgentAppProfile>(profiles: T[], addOnEdge?: boolean): T[];
    static ɵfac: i0.ɵɵFactoryDeclaration<EdgeTemplateCompatibilityService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EdgeTemplateCompatibilityService>;
}
