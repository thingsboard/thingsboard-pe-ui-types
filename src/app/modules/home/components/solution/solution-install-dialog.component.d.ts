import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import { SolutionInstallResponse, TenantSolutionTemplateInstructions } from '@shared/models/solution-template.models';
import * as i0 from "@angular/core";
export interface SolutionInstallDialogData {
    solutionInstallResponse: TenantSolutionTemplateInstructions | SolutionInstallResponse;
    instructions: boolean;
    showMainDashboardButton: boolean;
}
export declare class SolutionInstallDialogComponent extends DialogComponent<SolutionInstallDialogComponent> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    data: SolutionInstallDialogData;
    dialogRef: MatDialogRef<SolutionInstallDialogComponent>;
    solutionInstallResponse: SolutionInstallResponse;
    instructions: boolean;
    showMainDashboardButton: boolean;
    constructor(store: Store<AppState>, router: Router, data: SolutionInstallDialogData, dialogRef: MatDialogRef<SolutionInstallDialogComponent>);
    ngOnInit(): void;
    cancel(): void;
    gotoMainDashboard(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SolutionInstallDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SolutionInstallDialogComponent, "tb-solution-install-dialog", never, {}, {}, never, never, false, never>;
}
