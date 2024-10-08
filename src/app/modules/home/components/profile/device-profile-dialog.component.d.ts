import { AfterViewInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormGroupDirective, NgForm, UntypedFormControl } from '@angular/forms';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import { DeviceProfile } from '@shared/models/device.models';
import { DeviceProfileComponent } from './device-profile.component';
import { DeviceProfileService } from '@core/http/device-profile.service';
import * as i0 from "@angular/core";
export interface DeviceProfileDialogData {
    deviceProfile: DeviceProfile;
    isAdd: boolean;
}
export declare class DeviceProfileDialogComponent extends DialogComponent<DeviceProfileDialogComponent, DeviceProfile> implements ErrorStateMatcher, AfterViewInit {
    protected store: Store<AppState>;
    protected router: Router;
    data: DeviceProfileDialogData;
    dialogRef: MatDialogRef<DeviceProfileDialogComponent, DeviceProfile>;
    private errorStateMatcher;
    private deviceProfileService;
    isAdd: boolean;
    deviceProfile: DeviceProfile;
    submitted: boolean;
    deviceProfileComponent: DeviceProfileComponent;
    constructor(store: Store<AppState>, router: Router, data: DeviceProfileDialogData, dialogRef: MatDialogRef<DeviceProfileDialogComponent, DeviceProfile>, errorStateMatcher: ErrorStateMatcher, deviceProfileService: DeviceProfileService);
    ngAfterViewInit(): void;
    isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceProfileDialogComponent, [null, null, null, null, { skipSelf: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeviceProfileDialogComponent, "tb-device-profile-dialog", never, {}, {}, never, never, false, never>;
}
