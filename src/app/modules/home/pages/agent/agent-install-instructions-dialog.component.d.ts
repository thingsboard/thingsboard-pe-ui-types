import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '@shared/components/dialog.component';
import { Agent } from '@shared/models/agent.models';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export interface AgentInstallInstructionsDialogData {
    agent: Agent;
    afterAdd: boolean;
    instructions?: string;
}
export declare class AgentInstallInstructionsDialogComponent extends DialogComponent<AgentInstallInstructionsDialogComponent> {
    protected store: Store<AppState>;
    protected router: Router;
    protected translate: TranslateService;
    data: AgentInstallInstructionsDialogData;
    dialogRef: MatDialogRef<AgentInstallInstructionsDialogComponent>;
    agent: Agent;
    afterAdd: boolean;
    instructions?: string;
    dialogTitle: string;
    constructor(store: Store<AppState>, router: Router, translate: TranslateService, data: AgentInstallInstructionsDialogData, dialogRef: MatDialogRef<AgentInstallInstructionsDialogComponent>);
    close(): void;
    goToAgent(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AgentInstallInstructionsDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AgentInstallInstructionsDialogComponent, "tb-agent-install-instructions-dialog", never, {}, {}, never, never, false, never>;
}
