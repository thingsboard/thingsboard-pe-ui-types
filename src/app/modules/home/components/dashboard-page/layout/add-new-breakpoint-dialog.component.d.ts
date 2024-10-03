import { DialogComponent } from '@shared/components/dialog.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { DashboardUtilsService } from '@core/services/dashboard-utils.service';
import { BreakpointId } from '@shared/models/dashboard.models';
import * as i0 from "@angular/core";
export interface AddNewBreakpointDialogData {
    allowBreakpointIds: string[];
    selectedBreakpointIds: string[];
}
export interface AddNewBreakpointDialogResult {
    newBreakpointId: BreakpointId;
    copyFrom: BreakpointId;
}
export declare class AddNewBreakpointDialogComponent extends DialogComponent<AddNewBreakpointDialogComponent, AddNewBreakpointDialogResult> {
    protected store: Store<AppState>;
    protected router: Router;
    private fb;
    private data;
    protected dialogRef: MatDialogRef<AddNewBreakpointDialogComponent, AddNewBreakpointDialogResult>;
    private dashboardUtils;
    addBreakpointFormGroup: FormGroup;
    allowBreakpointIds: any[];
    selectedBreakpointIds: any[];
    constructor(store: Store<AppState>, router: Router, fb: FormBuilder, data: AddNewBreakpointDialogData, dialogRef: MatDialogRef<AddNewBreakpointDialogComponent, AddNewBreakpointDialogResult>, dashboardUtils: DashboardUtilsService);
    cancel(): void;
    save(): void;
    getName(breakpointId: BreakpointId): string;
    getIcon(breakpointId: BreakpointId): string;
    getSizeDescription(breakpointId: BreakpointId): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<AddNewBreakpointDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AddNewBreakpointDialogComponent, "add-new-breakpoint-dialog", never, {}, {}, never, never, false, never>;
}
