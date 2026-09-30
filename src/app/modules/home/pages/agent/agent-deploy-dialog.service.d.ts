import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { EntityId } from '@shared/models/id/entity-id';
import { AgentApplication, AgentApplicationType } from '@shared/models/agent.models';
import { AgentService } from '@core/http/agent.service';
import { AgentAppInstallWizardResult } from '@home/components/agent/wizard/agent-app-install-wizard.component';
import * as i0 from "@angular/core";
export declare class AgentDeployDialogService {
    private dialog;
    private agentService;
    constructor(dialog: MatDialog, agentService: AgentService);
    getManagedApp(relatedEntity: EntityId): Observable<AgentApplication | null>;
    open(appType: AgentApplicationType, relatedEntity: EntityId, options?: {
        showBack?: boolean;
    }): Observable<AgentAppInstallWizardResult>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AgentDeployDialogService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AgentDeployDialogService>;
}
