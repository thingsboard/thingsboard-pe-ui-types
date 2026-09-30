import { ChangeDetectorRef, DestroyRef, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { DialogComponent } from '@shared/components/dialog.component';
import { UntypedFormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { TranslateService } from '@ngx-translate/core';
import { MpItemVersionView } from '@shared/models/iot-hub/iot-hub-version.models';
import { IotHubApiService } from '@core/http/iot-hub-api.service';
import { DeviceProfileService } from '@core/http/device-profile.service';
import { DeviceService } from '@core/http/device.service';
import { DashboardService } from '@core/http/dashboard.service';
import { RuleChainService } from '@core/http/rule-chain.service';
import { AttributeService } from '@core/http/attribute.service';
import { ConverterService } from '@core/http/converter.service';
import { IntegrationService } from '@core/http/integration.service';
import { AiDashboardGenerationService } from '@home/components/ai/ai-dashboard-generation.service';
import { DeviceInstallStep, DevicePackageInfo, EntityStepOutput, EntityStepProgress, FormFieldDefinition } from '@shared/models/iot-hub/device-package.models';
import * as i0 from "@angular/core";
export interface DeviceInstallDialogData {
    item: MpItemVersionView;
    reviewMode?: boolean;
    selectedInstallMethod?: string;
    installState?: Record<string, any>;
    entityGroupId?: string;
    customerId?: string;
}
export type WizardStepType = 'connectivity' | 'placeholder' | 'instruction' | 'form' | 'progress';
export interface WizardStep {
    type: WizardStepType;
    label: string;
    rawSteps: DeviceInstallStep[];
    completed: boolean;
    markdown?: string;
    formFields?: FormFieldDefinition[];
    formGroup?: UntypedFormGroup;
    entitySteps?: EntityStepProgress[];
    progressError?: string;
    progressDone?: boolean;
}
export declare class TbDeviceInstallDialogComponent extends DialogComponent<TbDeviceInstallDialogComponent> implements OnInit, OnDestroy {
    protected store: Store<AppState>;
    protected router: Router;
    protected dialogRef: MatDialogRef<TbDeviceInstallDialogComponent>;
    data: DeviceInstallDialogData;
    private destroyRef;
    private cdr;
    private deviceProfileService;
    private deviceService;
    private dashboardService;
    private ruleChainService;
    private attributeService;
    private iotHubApiService;
    private converterService;
    private integrationService;
    private aiDashboardGenerationService;
    private translate;
    stepper: MatStepper;
    loading: boolean;
    packageInfo: DevicePackageInfo;
    zipFiles: Map<string, string>;
    zipImages: Map<string, string>;
    availableInstallMethods: string[];
    selectedInstallMethod: string | null;
    installMethodLabels: Map<string, string>;
    installMethodIcons: Map<string, string>;
    wizardSteps: WizardStep[];
    wizardStarted: boolean;
    reviewMode: boolean;
    allowAiDashboardGenerate: boolean;
    /**
     * Set once the server has an installed item for this device. From that moment every way out of
     * the wizard — including the header X and the Cancel button on a still-pending later step —
     * has to report 'installed', or the caller keeps showing pre-install counts and badges.
     */
    private installRegistered;
    formValues: Record<string, any>;
    entityOutputs: Map<string, EntityStepOutput>;
    transportVars: Record<string, string>;
    private pendingRoutingKey;
    private fieldTypes;
    gatewayDockerComposeContent: string | null;
    resolveMarkdownVariable: (key: string) => string | undefined;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<TbDeviceInstallDialogComponent>, data: DeviceInstallDialogData, destroyRef: DestroyRef, cdr: ChangeDetectorRef, deviceProfileService: DeviceProfileService, deviceService: DeviceService, dashboardService: DashboardService, ruleChainService: RuleChainService, attributeService: AttributeService, iotHubApiService: IotHubApiService, converterService: ConverterService, integrationService: IntegrationService, aiDashboardGenerationService: AiDashboardGenerationService, translate: TranslateService);
    ngOnInit(): Promise<void>;
    ngOnDestroy(): void;
    selectConnectivity(ct: string): void;
    onTabChanged(index: number): void;
    confirmConnectivity(): void;
    get isFirstWizardStep(): boolean;
    get allProgressDone(): boolean;
    get isLastWizardStep(): boolean;
    get currentWizardStep(): WizardStep | null;
    get nextWizardStepLabel(): string;
    previousStep(): void;
    nextStep(): void;
    get primaryEntityAction(): {
        url: string;
        label: string;
    } | null;
    openEntity(url: string): void;
    get canGenerateAiDashboard(): boolean;
    generateDashboardWithAi(): void;
    done(): void;
    cancel(): void;
    retryEntitySteps(step: WizardStep): void;
    resolveConflict(ws: WizardStep, ep: EntityStepProgress, resolution: string): Promise<void>;
    goBackToForm(): void;
    onMarkdownReady(container: HTMLElement): void;
    resolveImagePath(path: string): string;
    readonly resolveImagePathFn: (path: string) => string;
    resolveVariables(content: string): string;
    resolveVariable(key: string): string | undefined;
    private platformBaseUrl;
    /**
     * Resolve a JSON template, type-aware. A placeholder that fills an entire JSON string
     * token (e.g. "${mqttCleanSession}") whose form field is BOOLEAN or INTEGER is emitted as
     * a raw JSON boolean/number rather than a quoted string. Authored templates always quote
     * macros so the template file is valid JSON; the recorded form-field type decides the real
     * type at install time. Without this, "cleanSession": "${mqttCleanSession}" parses as the
     * string "false" (truthy) — so an unchecked boolean would be read as true. Placeholders
     * embedded in a larger string (e.g. "v3/${mqttUsername}/...") and STRING/PASSWORD/SELECT
     * fields are left quoted and handled by the regular resolveVariables() pass.
     */
    resolveTemplateJson(raw: string): any;
    private _resolveMarkdownVariable;
    private restoreInstallState;
    private startWizard;
    private buildWizardSteps;
    private appendInstallSteps;
    private initFormStep;
    private resolveInitialFieldValue;
    private onStepActivated;
    private showCompletedEntitySteps;
    private initAndRunEntitySteps;
    private markEntityStepSuccess;
    private runEntitySteps;
    private createEntity;
    private buildIntegrationOutput;
    private saveRuleChainWithMetadata;
    private resolveCredentials;
    private findDeviceProfileByName;
    private findRuleChainByName;
    /** Converters are unique by (tenant, name, type). Match both. */
    private findConverterByNameAndType;
    /** Wire converter references from earlier UPLINK_CONVERTER / DOWNLINK_CONVERTER steps onto the
     *  Integration body. Mutates `body` in place. Does not override values the template already
     *  baked (creators may reference pre-existing converters by id directly in the template). */
    private attachConverterReferences;
    /** Integrations are unique by name within tenant. */
    private findIntegrationByName;
    private findDeviceByName;
    private findDashboardByTitle;
    private overwriteEntity;
    private preCheckEntity;
    private getConflictType;
    private buildInstallState;
    private collectCreatedEntityIds;
    private findCreatedDashboardId;
    private saveStepAttributes;
    private stepTypeToEntityType;
    private generateUuid;
    private delay;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbDeviceInstallDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TbDeviceInstallDialogComponent, "tb-device-install-dialog", never, {}, {}, never, never, false, never>;
}
