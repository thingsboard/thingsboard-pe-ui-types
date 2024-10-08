import { AfterViewInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormGroupDirective, NgForm, UntypedFormControl } from '@angular/forms';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import { AssetProfile } from '@shared/models/asset.models';
import { AssetProfileComponent } from '@home/components/profile/asset-profile.component';
import { AssetProfileService } from '@core/http/asset-profile.service';
import * as i0 from "@angular/core";
export interface AssetProfileDialogData {
    assetProfile: AssetProfile;
    isAdd: boolean;
}
export declare class AssetProfileDialogComponent extends DialogComponent<AssetProfileDialogComponent, AssetProfile> implements ErrorStateMatcher, AfterViewInit {
    protected store: Store<AppState>;
    protected router: Router;
    data: AssetProfileDialogData;
    dialogRef: MatDialogRef<AssetProfileDialogComponent, AssetProfile>;
    private errorStateMatcher;
    private assetProfileService;
    isAdd: boolean;
    assetProfile: AssetProfile;
    submitted: boolean;
    assetProfileComponent: AssetProfileComponent;
    constructor(store: Store<AppState>, router: Router, data: AssetProfileDialogData, dialogRef: MatDialogRef<AssetProfileDialogComponent, AssetProfile>, errorStateMatcher: ErrorStateMatcher, assetProfileService: AssetProfileService);
    ngAfterViewInit(): void;
    isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AssetProfileDialogComponent, [null, null, null, null, { skipSelf: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AssetProfileDialogComponent, "tb-asset-profile-dialog", never, {}, {}, never, never, false, never>;
}
