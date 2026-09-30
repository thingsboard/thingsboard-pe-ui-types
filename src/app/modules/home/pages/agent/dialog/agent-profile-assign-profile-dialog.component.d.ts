import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '@shared/components/dialog.component';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { AgentApplicationType } from '@shared/models/agent.models';
import * as i0 from "@angular/core";
export interface AgentProfileAssignProfileDialogData {
    selectedIds?: string[];
    lockedAppType?: AgentApplicationType;
}
export declare class AgentProfileAssignProfileDialogComponent extends DialogComponent<AgentProfileAssignProfileDialogComponent, string[]> {
    protected store: Store<AppState>;
    protected router: Router;
    private dialog;
    private fb;
    data: AgentProfileAssignProfileDialogData;
    dialogRef: MatDialogRef<AgentProfileAssignProfileDialogComponent, string[]>;
    formGroup: UntypedFormGroup;
    constructor(store: Store<AppState>, router: Router, dialog: MatDialog, fb: UntypedFormBuilder, data: AgentProfileAssignProfileDialogData, dialogRef: MatDialogRef<AgentProfileAssignProfileDialogComponent, string[]>);
    cancel(): void;
    confirm(): void;
    createAppProfile(): void;
    private dismissAutocomplete;
    private openAppProfileWizard;
    static ɵfac: i0.ɵɵFactoryDeclaration<AgentProfileAssignProfileDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AgentProfileAssignProfileDialogComponent, "tb-agent-profile-assign-profile-dialog", never, {}, {}, never, never, false, never>;
}
