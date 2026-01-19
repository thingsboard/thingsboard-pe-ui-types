import { MobileAppBundle, MobileAppBundleInfo } from '@shared/models/mobile-app.models';
import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { StepperOrientation, StepperSelectionEvent } from '@angular/cdk/stepper';
import { BreakpointObserver } from '@angular/cdk/layout';
import { FormBuilder } from '@angular/forms';
import { EntityType } from '@shared/models/entity-type.models';
import { PlatformType } from '@shared/models/oauth2.models';
import { MatStepper } from '@angular/material/stepper';
import { MobileAppService } from '@core/http/mobile-app.service';
import { Operation, Resource } from '@shared/models/security.models';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import * as i0 from "@angular/core";
export interface MobileBundleDialogData {
    bundle?: MobileAppBundleInfo;
    isAdd?: boolean;
}
export declare class MobileBundleDialogComponent extends DialogComponent<MobileBundleDialogComponent, MobileAppBundle> {
    protected store: Store<AppState>;
    protected router: Router;
    protected dialogRef: MatDialogRef<MobileBundleDialogComponent, MobileAppBundle>;
    data: MobileBundleDialogData;
    private breakpointObserver;
    private fb;
    private dialog;
    private mobileAppService;
    private userPermissionsService;
    addMobileBundle: MatStepper;
    readonly entityType: typeof EntityType;
    readonly resource: typeof Resource;
    readonly operation: typeof Operation;
    selectedIndex: number;
    dialogTitle: string;
    stepperOrientation: Observable<StepperOrientation>;
    platformType: typeof PlatformType;
    bundlesForms: import("@angular/forms").FormGroup<{
        title: import("@angular/forms").FormControl<string>;
        androidAppId: import("@angular/forms").FormControl<any>;
        iosAppId: import("@angular/forms").FormControl<any>;
        description: import("@angular/forms").FormControl<string>;
    }>;
    oauthForms: import("@angular/forms").FormGroup<{
        oauth2Enabled: import("@angular/forms").FormControl<boolean>;
        oauth2ClientIds: import("@angular/forms").FormControl<any>;
    }>;
    layoutForms: import("@angular/forms").FormGroup<{
        layoutConfig: import("@angular/forms").FormControl<any>;
    }>;
    selfRegistrationForm: import("@angular/forms").FormGroup<{
        selfRegistrationParams: import("@angular/forms").FormControl<any>;
    }>;
    isAdd: boolean;
    readonly isSysAdmin: boolean;
    readonly: boolean;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<MobileBundleDialogComponent, MobileAppBundle>, data: MobileBundleDialogData, breakpointObserver: BreakpointObserver, fb: FormBuilder, dialog: MatDialog, mobileAppService: MobileAppService, userPermissionsService: UserPermissionsService);
    cancel(): void;
    backStep(): void;
    nextStep(): void;
    nextStepLabel(): string;
    changeStep($event: StepperSelectionEvent): void;
    createApplication(name: string, formControl: string, platformType: PlatformType): void;
    createClient($event: Event): void;
    private get maxStepperIndex();
    private add;
    private allValid;
    private get mobileAppBundleFormValue();
    static ɵfac: i0.ɵɵFactoryDeclaration<MobileBundleDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MobileBundleDialogComponent, "tb-mobile-bundle-dialog", never, {}, {}, never, never, false, never>;
}
