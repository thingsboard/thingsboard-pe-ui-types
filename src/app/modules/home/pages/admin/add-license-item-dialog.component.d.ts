import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export interface AddLicenseItemDialogData {
    itemName: string;
    add: boolean;
    isPerpetual: boolean;
    licensePortalUrl: string;
    disabledClose?: boolean;
}
export declare class AddLicenseItemDialogComponent extends DialogComponent<AddLicenseItemDialogComponent, boolean> {
    protected store: Store<AppState>;
    protected router: Router;
    data: AddLicenseItemDialogData;
    dialogRef: MatDialogRef<AddLicenseItemDialogComponent, boolean>;
    constructor(store: Store<AppState>, router: Router, data: AddLicenseItemDialogData, dialogRef: MatDialogRef<AddLicenseItemDialogComponent, boolean>);
    cancel(): void;
    refresh(): void;
    goToLicensePortal(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AddLicenseItemDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AddLicenseItemDialogComponent, "tb-add-license-item-dialog", never, {}, {}, never, never, false, never>;
}
