import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '@shared/components/dialog.component';
import { TranslateService } from '@ngx-translate/core';
import { AgentService } from '@core/http/agent.service';
import { AgentApplication, AgentAppEvent, AgentAppStep } from '@shared/models/agent.models';
import * as i0 from "@angular/core";
export interface AgentAppDeleteDialogData {
    application: AgentApplication;
    agentName?: string;
    composeDownStep?: AgentAppStep | null;
}
export declare class AgentAppDeleteDialogComponent extends DialogComponent<AgentAppDeleteDialogComponent, AgentAppEvent | null> {
    protected store: Store<AppState>;
    protected router: Router;
    protected translate: TranslateService;
    private agentService;
    data: AgentAppDeleteDialogData;
    dialogRef: MatDialogRef<AgentAppDeleteDialogComponent, AgentAppEvent | null>;
    application: AgentApplication;
    agentName: string;
    removeVolumes: boolean;
    volumeKeys: string[];
    submitting: boolean;
    composeDownStep: AgentAppStep | null;
    constructor(store: Store<AppState>, router: Router, translate: TranslateService, agentService: AgentService, data: AgentAppDeleteDialogData, dialogRef: MatDialogRef<AgentAppDeleteDialogComponent, AgentAppEvent | null>);
    cancel(): void;
    confirm(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AgentAppDeleteDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AgentAppDeleteDialogComponent, "tb-agent-app-delete-dialog", never, {}, {}, never, never, false, never>;
}
