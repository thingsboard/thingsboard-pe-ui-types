import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AgentProfile } from '@shared/models/agent.models';
import { AgentProfileWizardData } from '@home/pages/agent/wizard/agent-profile-wizard.component';
import * as i0 from "@angular/core";
export declare class AgentProfileCreateDialogService {
    private dialog;
    constructor(dialog: MatDialog);
    open(data: AgentProfileWizardData): Observable<AgentProfile | undefined>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AgentProfileCreateDialogService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AgentProfileCreateDialogService>;
}
