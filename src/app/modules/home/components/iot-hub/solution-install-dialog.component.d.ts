import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SolutionTemplateInstalledItemDescriptor } from '@shared/models/iot-hub/iot-hub-installed-item.models';
import * as i0 from "@angular/core";
export interface SolutionInstallDialogData {
    descriptor: SolutionTemplateInstalledItemDescriptor;
    instructions?: boolean;
}
export declare class SolutionInstallDialogComponent {
    data: SolutionInstallDialogData;
    private dialogRef;
    private router;
    details: string;
    dashboardGroupId: string | null;
    dashboardId: string | null;
    instructions: boolean;
    constructor(data: SolutionInstallDialogData, dialogRef: MatDialogRef<SolutionInstallDialogComponent>, router: Router);
    gotoMainDashboard(): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SolutionInstallDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SolutionInstallDialogComponent, "tb-solution-install-dialog", never, {}, {}, never, never, false, never>;
}
