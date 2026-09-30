import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { AddonType, UsageItemType } from '@shared/models/subscription.models';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare enum LicenseHandOffCase {
    MANAGE_LICENSE = "MANAGE_LICENSE",
    ADD_ITEMS = "ADD_ITEMS",
    ADD_ADDON = "ADD_ADDON",
    UPGRADE_PLAN_FOR_ITEMS = "UPGRADE_PLAN_FOR_ITEMS",
    UPGRADE_PLAN_FOR_ADDON = "UPGRADE_PLAN_FOR_ADDON"
}
export interface LicenseHandOffDialogData {
    case: LicenseHandOffCase;
    isPerpetual: boolean;
    isCeGrant: boolean;
    itemType?: UsageItemType;
    addonType?: AddonType;
    planName?: string;
}
export declare class LicenseHandOffDialogComponent extends DialogComponent<LicenseHandOffDialogComponent, boolean> {
    protected store: Store<AppState>;
    protected router: Router;
    private translate;
    data: LicenseHandOffDialogData;
    dialogRef: MatDialogRef<LicenseHandOffDialogComponent, boolean>;
    notShowAgain: boolean;
    dialogTitle: string;
    caseText: string;
    caseText2: string;
    openPortalText: string;
    constructor(store: Store<AppState>, router: Router, translate: TranslateService, data: LicenseHandOffDialogData, dialogRef: MatDialogRef<LicenseHandOffDialogComponent, boolean>);
    cancel(): void;
    openPortal(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LicenseHandOffDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LicenseHandOffDialogComponent, "tb-license-handoff-dialog", never, {}, {}, never, never, false, never>;
}
