import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AgentApplicationType } from '@shared/models/agent.models';
import * as i0 from "@angular/core";
export declare class AgentAutoProvisionDialogService {
    private dialog;
    constructor(dialog: MatDialog);
    open(appType?: AgentApplicationType): Observable<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AgentAutoProvisionDialogService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AgentAutoProvisionDialogService>;
}
