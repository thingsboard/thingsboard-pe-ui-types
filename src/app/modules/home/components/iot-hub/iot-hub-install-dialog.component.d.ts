import { DestroyRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { DialogComponent } from '@shared/components/dialog.component';
import { MpItemVersionView } from '@shared/models/iot-hub/iot-hub-version.models';
import { ItemType } from '@shared/models/iot-hub/iot-hub-item.models';
import { InstallPlan, InstallPlanEntry, InstallPlanEntryStatus } from '@shared/models/iot-hub/iot-hub-installed-item.models';
import { IotHubApiService } from '@core/http/iot-hub-api.service';
import { TranslateService } from '@ngx-translate/core';
import { EntityType } from '@shared/models/entity-type.models';
import { EntityId } from '@shared/models/id/entity-id';
import { DeviceProfileService } from '@core/http/device-profile.service';
import { AssetProfileService } from '@core/http/asset-profile.service';
import { RuleChainService } from '@core/http/rule-chain.service';
import * as i0 from "@angular/core";
interface SelectEntityConfig {
    allowed: EntityType[];
    defaultType: EntityType;
    required: boolean;
    promptKey?: string;
}
interface PendingOverwrite {
    entityId: EntityId;
    profileName: string;
    existingRuleChainName: string;
}
export interface IotHubInstallDialogData {
    item: MpItemVersionView;
    /**
     * Starts installing right away instead of opening on the confirm step. Set by callers that
     * already asked the user — e.g. a built-in item whose local copy was deleted — so the user is
     * not asked to confirm the same install twice. Ignored when the item needs input first
     * (entity selection, rule chain options).
     */
    skipConfirm?: boolean;
}
export type InstallState = 'select-entity' | 'confirm-overwrite' | 'confirm' | 'plan' | 'installing' | 'success' | 'partial' | 'error';
export declare class TbIotHubInstallDialogComponent extends DialogComponent<TbIotHubInstallDialogComponent> {
    protected store: Store<AppState>;
    protected router: Router;
    protected dialogRef: MatDialogRef<TbIotHubInstallDialogComponent>;
    data: IotHubInstallDialogData;
    private dialog;
    private translate;
    private iotHubApiService;
    private deviceProfileService;
    private assetProfileService;
    private ruleChainService;
    private fb;
    private destroyRef;
    ItemType: typeof ItemType;
    PlanStatus: typeof InstallPlanEntryStatus;
    EntityType: typeof EntityType;
    item: MpItemVersionView;
    typeTranslations: Map<ItemType, string>;
    state: InstallState;
    errorMessage: string;
    entityDetailsUrl: string | null;
    selectedEntityId: EntityId | null;
    pendingOverwrite: PendingOverwrite | null;
    ruleChainInstallForm: FormGroup<{
        setAsDefault: FormControl<boolean>;
        entityType: FormControl<EntityType>;
        entityId: FormControl<string | null>;
    }>;
    installPlan: InstallPlan | null;
    planSummary: {
        willInstall: number;
        alreadyInstalled: number;
        missing: number;
    };
    missingEntries: InstallPlanEntry[];
    resolvingPlan: boolean;
    private readonly selectEntityConfig;
    get activeSelectEntityConfig(): SelectEntityConfig | null;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<TbIotHubInstallDialogComponent>, data: IotHubInstallDialogData, dialog: MatDialog, translate: TranslateService, iotHubApiService: IotHubApiService, deviceProfileService: DeviceProfileService, assetProfileService: AssetProfileService, ruleChainService: RuleChainService, fb: FormBuilder, destroyRef: DestroyRef);
    private computeInitialState;
    private initRuleChainForm;
    getTypeLabel(): string;
    onEntitySelectInstall(): void;
    onRuleChainInstall(): void;
    confirmOverwriteReplace(): void;
    confirmOverwriteCancel(): void;
    private resolveOverwrite;
    install(): void;
    installItemWithDependencies(): void;
    private installItem;
    private summarizePlan;
    private handleApiError;
    private handlePlanResult;
    private handleInstalledDescriptor;
    private installData;
    cancelPlan(): void;
    openEntityDetails(): void;
    close(): void;
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbIotHubInstallDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TbIotHubInstallDialogComponent, "tb-iot-hub-install-dialog", never, {}, {}, never, never, false, never>;
}
export {};
