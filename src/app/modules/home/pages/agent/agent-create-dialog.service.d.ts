import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AgentService } from '@core/http/agent.service';
import { AgentInfo } from '@shared/models/agent.models';
import * as i0 from "@angular/core";
export declare class AgentCreateDialogService {
    private dialog;
    private agentService;
    constructor(dialog: MatDialog, agentService: AgentService);
    create(): Observable<AgentInfo>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AgentCreateDialogService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AgentCreateDialogService>;
}
