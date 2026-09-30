import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '@shared/components/dialog.component';
import * as i0 from "@angular/core";
export interface AgentAppAssignCompareDialogData {
    appName: string;
    profileName: string;
    currentYaml: string;
    futureYaml: string;
}
export declare class AgentAppAssignCompareDialogComponent extends DialogComponent<AgentAppAssignCompareDialogComponent, boolean> {
    protected store: Store<AppState>;
    protected router: Router;
    data: AgentAppAssignCompareDialogData;
    dialogRef: MatDialogRef<AgentAppAssignCompareDialogComponent, boolean>;
    diffSyncScroll: boolean;
    constructor(store: Store<AppState>, router: Router, data: AgentAppAssignCompareDialogData, dialogRef: MatDialogRef<AgentAppAssignCompareDialogComponent, boolean>);
    cancel(): void;
    confirm(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AgentAppAssignCompareDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AgentAppAssignCompareDialogComponent, "tb-agent-app-assign-compare-dialog", never, {}, {}, never, never, false, never>;
}
