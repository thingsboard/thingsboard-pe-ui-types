import { AfterViewInit, ComponentFactoryResolver, Injector } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import { DeviceProfile, DeviceProfileType, DeviceTransportType } from '@shared/models/device.models';
import { DeviceProfileService } from '@core/http/device-profile.service';
import { EntityType } from '@shared/models/entity-type.models';
import { MatStepper } from '@angular/material/stepper';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { ServiceType } from '@shared/models/queue.models';
import { RuleChainType } from '@shared/models/rule-chain.models';
import * as i0 from "@angular/core";
export interface AddDeviceProfileDialogData {
    deviceProfileName: string;
    transportType: DeviceTransportType;
}
export declare class AddDeviceProfileDialogComponent extends DialogComponent<AddDeviceProfileDialogComponent, DeviceProfile> implements AfterViewInit {
    protected store: Store<AppState>;
    protected router: Router;
    data: AddDeviceProfileDialogData;
    dialogRef: MatDialogRef<AddDeviceProfileDialogComponent, DeviceProfile>;
    private componentFactoryResolver;
    private injector;
    private errorStateMatcher;
    private deviceProfileService;
    private fb;
    addDeviceProfileStepper: MatStepper;
    selectedIndex: number;
    showNext: boolean;
    entityType: typeof EntityType;
    deviceProfileTypes: DeviceProfileType[];
    deviceProfileTypeTranslations: Map<DeviceProfileType, string>;
    deviceTransportTypeHints: Map<DeviceTransportType, string>;
    deviceTransportTypes: DeviceTransportType[];
    deviceTransportTypeTranslations: Map<DeviceTransportType, string>;
    deviceProfileDetailsFormGroup: UntypedFormGroup;
    transportConfigFormGroup: UntypedFormGroup;
    alarmRulesFormGroup: UntypedFormGroup;
    provisionConfigFormGroup: UntypedFormGroup;
    serviceType: ServiceType;
    edgeRuleChainType: RuleChainType;
    constructor(store: Store<AppState>, router: Router, data: AddDeviceProfileDialogData, dialogRef: MatDialogRef<AddDeviceProfileDialogComponent, DeviceProfile>, componentFactoryResolver: ComponentFactoryResolver, injector: Injector, errorStateMatcher: ErrorStateMatcher, deviceProfileService: DeviceProfileService, fb: UntypedFormBuilder);
    private deviceProfileTransportTypeChanged;
    ngAfterViewInit(): void;
    cancel(): void;
    previousStep(): void;
    nextStep(): void;
    selectedForm(): UntypedFormGroup;
    add(): void;
    getFormLabel(index: number): string;
    changeStep($event: StepperSelectionEvent): void;
    private get maxStepperIndex();
    allValid(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<AddDeviceProfileDialogComponent, [null, null, null, null, null, null, { skipSelf: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AddDeviceProfileDialogComponent, "tb-add-device-profile-dialog", never, {}, {}, never, never, false>;
}
