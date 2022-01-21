import { OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { DeviceService } from '@core/http/device.service';
import { DeviceCredentials, DeviceTransportType } from '@shared/models/device.models';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import { DeviceProfileService } from '@core/http/device-profile.service';
import * as i0 from "@angular/core";
export interface DeviceCredentialsDialogData {
    isReadOnly: boolean;
    deviceId: string;
    deviceProfileId: string;
}
export declare class DeviceCredentialsDialogComponent extends DialogComponent<DeviceCredentialsDialogComponent, DeviceCredentials> implements OnInit, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    data: DeviceCredentialsDialogData;
    private deviceService;
    private deviceProfileService;
    private errorStateMatcher;
    dialogRef: MatDialogRef<DeviceCredentialsDialogComponent, DeviceCredentials>;
    fb: FormBuilder;
    deviceCredentialsFormGroup: FormGroup;
    deviceTransportType: DeviceTransportType;
    isReadOnly: boolean;
    loadingCredentials: boolean;
    private deviceCredentials;
    private submitted;
    constructor(store: Store<AppState>, router: Router, data: DeviceCredentialsDialogData, deviceService: DeviceService, deviceProfileService: DeviceProfileService, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<DeviceCredentialsDialogComponent, DeviceCredentials>, fb: FormBuilder);
    ngOnInit(): void;
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    loadDeviceCredentials(): void;
    private deviceProfileInfo;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceCredentialsDialogComponent, [null, null, null, null, null, { skipSelf: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeviceCredentialsDialogComponent, "tb-device-credentials-dialog", never, {}, {}, never, never>;
}
