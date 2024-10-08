import { AfterViewInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormGroupDirective, NgForm, UntypedFormControl } from '@angular/forms';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import { TenantProfile } from '@shared/models/tenant.model';
import { TenantProfileComponent } from './tenant-profile.component';
import { TenantProfileService } from '@core/http/tenant-profile.service';
import * as i0 from "@angular/core";
export interface TenantProfileDialogData {
    tenantProfile: TenantProfile;
    isAdd: boolean;
}
export declare class TenantProfileDialogComponent extends DialogComponent<TenantProfileDialogComponent, TenantProfile> implements ErrorStateMatcher, AfterViewInit {
    protected store: Store<AppState>;
    protected router: Router;
    data: TenantProfileDialogData;
    dialogRef: MatDialogRef<TenantProfileDialogComponent, TenantProfile>;
    private errorStateMatcher;
    private tenantProfileService;
    isAdd: boolean;
    tenantProfile: TenantProfile;
    submitted: boolean;
    tenantProfileComponent: TenantProfileComponent;
    constructor(store: Store<AppState>, router: Router, data: TenantProfileDialogData, dialogRef: MatDialogRef<TenantProfileDialogComponent, TenantProfile>, errorStateMatcher: ErrorStateMatcher, tenantProfileService: TenantProfileService);
    ngAfterViewInit(): void;
    isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TenantProfileDialogComponent, [null, null, null, null, { skipSelf: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TenantProfileDialogComponent, "tb-tenant-profile-dialog", never, {}, {}, never, never, false, never>;
}
