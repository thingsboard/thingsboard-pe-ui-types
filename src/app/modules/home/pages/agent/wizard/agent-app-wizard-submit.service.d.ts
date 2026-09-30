import { Observable } from 'rxjs';
import { AgentService } from '@core/http/agent.service';
import { EntityId } from '@shared/models/id/entity-id';
import { AgentAppEvent, AgentAppInstallResponse } from '@shared/models/agent.models';
import * as i0 from "@angular/core";
export interface UpdateSubmitContext {
    existingApplicationId: string;
    application: any;
    stepInputs: {
        [stepId: string]: any;
    };
    relatedEntityId: EntityId | null;
    initialRelatedEntityId: EntityId | null;
    isProfileManagedUpdate: boolean;
    skipProfileRefetch: boolean;
}
export declare class AgentAppWizardSubmitService {
    private agentService;
    constructor(agentService: AgentService);
    upgrade(existingApplicationId: string, application: any, stepInputs: {
        [stepId: string]: any;
    }): Observable<AgentAppEvent>;
    update(ctx: UpdateSubmitContext): Observable<AgentAppEvent>;
    install(application: any, stepInputs: {
        [stepId: string]: any;
    }, relatedEntityId: EntityId | null): Observable<AgentAppInstallResponse>;
    private assign;
    static ɵfac: i0.ɵɵFactoryDeclaration<AgentAppWizardSubmitService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AgentAppWizardSubmitService>;
}
