import { AfterViewInit, OnDestroy } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroupDirective, NgForm, UntypedFormControl } from '@angular/forms';
import { MobileApp } from '@shared/models/mobile-app.models';
import { MobileAppComponent } from '@home/pages/mobile/applications/mobile-app.component';
import { PlatformType } from '@shared/models/oauth2.models';
import { MobileAppService } from '@core/http/mobile-app.service';
import * as i0 from "@angular/core";
export interface MobileAppDialogData {
    platformType: PlatformType;
}
export declare class MobileAppDialogComponent extends DialogComponent<MobileAppDialogComponent, MobileApp> implements OnDestroy, AfterViewInit, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    protected dialogRef: MatDialogRef<MobileAppDialogComponent, MobileApp>;
    private mobileAppService;
    data: MobileAppDialogData;
    private errorStateMatcher;
    submitted: boolean;
    mobileAppComponent: MobileAppComponent;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<MobileAppDialogComponent, MobileApp>, mobileAppService: MobileAppService, data: MobileAppDialogData, errorStateMatcher: ErrorStateMatcher);
    ngAfterViewInit(): void;
    isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MobileAppDialogComponent, [null, null, null, null, null, { skipSelf: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MobileAppDialogComponent, "tb-mobile-app-dialog", never, {}, {}, never, never, false, never>;
}
