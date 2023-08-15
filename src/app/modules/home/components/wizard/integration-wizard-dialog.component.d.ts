import { AfterViewInit, OnDestroy } from '@angular/core';
import { DialogComponent } from '@shared/components/dialog.component';
import { Integration } from '@shared/models/integration.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { AddEntityDialogData } from '@home/models/entity/entity-component.models';
import { MatStepper, StepperOrientation } from '@angular/material/stepper';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { TranslateService } from '@ngx-translate/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Converter, ConverterType } from '@shared/models/converter.models';
import { ConverterComponent } from '@home/components/converter/converter.component';
import { ConverterService } from '@core/http/converter.service';
import { IntegrationService } from '@core/http/integration.service';
import * as i0 from "@angular/core";
export interface IntegrationWizardData<T> extends AddEntityDialogData<T> {
    edgeTemplate: boolean;
}
export declare class IntegrationWizardDialogComponent extends DialogComponent<IntegrationWizardDialogComponent, Integration> implements AfterViewInit, OnDestroy {
    protected store: Store<AppState>;
    protected router: Router;
    data: IntegrationWizardData<Integration>;
    dialogRef: MatDialogRef<IntegrationWizardDialogComponent, Integration>;
    private breakpointObserver;
    private converterService;
    private integrationService;
    private translate;
    private fb;
    addIntegrationWizardStepper: MatStepper;
    uplinkDataConverterComponent: ConverterComponent;
    downlinkDataConverterComponent: ConverterComponent;
    selectedIndex: number;
    converterType: typeof ConverterType;
    isEdgeTemplate: boolean;
    showCheckConnection: boolean;
    integrationType: string;
    showCheckSuccess: boolean;
    checkErrMsg: string;
    showDownlinkStep: boolean;
    stepperOrientation: Observable<StepperOrientation>;
    integrationWizardForm: UntypedFormGroup;
    uplinkConverterForm: UntypedFormGroup;
    downlinkConverterForm: UntypedFormGroup;
    integrationConfigurationForm: UntypedFormGroup;
    uplinkConverter: Converter;
    downlinkConverter: Converter;
    private checkConnectionAllow;
    private destroy$;
    constructor(store: Store<AppState>, router: Router, data: IntegrationWizardData<Integration>, dialogRef: MatDialogRef<IntegrationWizardDialogComponent, Integration>, breakpointObserver: BreakpointObserver, converterService: ConverterService, integrationService: IntegrationService, translate: TranslateService, fb: UntypedFormBuilder);
    ngAfterViewInit(): void;
    createConvertorName(type: ConverterType): any;
    ngOnDestroy(): void;
    add(): void;
    get helpLinkId(): string;
    private createUplinkConverter;
    private createDownlinkConverter;
    private getIntegrationData;
    private createdIntegration;
    cancel(): void;
    private get maxStep();
    changeStep($event: StepperSelectionEvent): void;
    nextStep(): void;
    nextStepLabel(): string;
    backStep(): void;
    onIntegrationInfoCopied(type: string): void;
    onIntegrationCheck(): void;
    get isCheckConnectionAvailable(): boolean;
    private get isRemoteIntegration();
    private get isConnectionStep();
    private generateSecret;
    private allValid;
    static ɵfac: i0.ɵɵFactoryDeclaration<IntegrationWizardDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IntegrationWizardDialogComponent, "tb-integration-wizard", never, {}, {}, never, never, false, never>;
}
