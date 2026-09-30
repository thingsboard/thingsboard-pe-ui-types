import { OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '@shared/components/dialog.component';
import { TranslateService } from '@ngx-translate/core';
import { AgentService } from '@core/http/agent.service';
import { AgentAppEventActionType, AgentAppProfile, AgentAppTemplate, AgentProfileInfo, BulkOperationPreview, BulkOperationResult, SkippedApp, SkipReason } from '@shared/models/agent.models';
import { StepBinding as SharedStepBinding, VolumeChoice } from '@home/pages/agent/util/agent-app-step-inputs';
import * as i0 from "@angular/core";
export interface AgentProfileBulkActionDialogData {
    agentProfile: AgentProfileInfo;
    profile: AgentAppProfile;
    actionType: AgentAppEventActionType;
    templates?: AgentAppTemplate[] | null;
    preview: BulkOperationPreview;
}
export interface StepBinding extends SharedStepBinding {
    stepIds: string[];
}
export declare class AgentProfileBulkActionDialogComponent extends DialogComponent<AgentProfileBulkActionDialogComponent, BulkOperationResult> implements OnDestroy {
    protected store: Store<AppState>;
    protected router: Router;
    protected translate: TranslateService;
    private agentService;
    data: AgentProfileBulkActionDialogData;
    dialogRef: MatDialogRef<AgentProfileBulkActionDialogComponent, BulkOperationResult>;
    private readonly destroy$;
    agentProfile: AgentProfileInfo;
    profile: AgentAppProfile;
    actionType: AgentAppEventActionType;
    submitting: boolean;
    previewLoaded: boolean;
    preview: BulkOperationPreview | null;
    skippedByReasonMap: Partial<Record<SkipReason, SkippedApp[]>>;
    skippedLinkMap: Map<string, string[]>;
    totalSkipped: number;
    bindings: StepBinding[];
    profileVolumeKeys: string[];
    readonly ActionType: typeof AgentAppEventActionType;
    readonly SkipReason: typeof SkipReason;
    constructor(store: Store<AppState>, router: Router, translate: TranslateService, agentService: AgentService, data: AgentProfileBulkActionDialogData, dialogRef: MatDialogRef<AgentProfileBulkActionDialogComponent, BulkOperationResult>);
    ngOnDestroy(): void;
    get titleKey(): string;
    get confirmKey(): string;
    get confirmColor(): 'primary' | 'warn' | 'accent';
    get confirmDisabled(): boolean;
    skippedByReason(reason: SkipReason): SkippedApp[];
    skippedCount(reason: SkipReason): number;
    skippedExtraCount(reason: SkipReason): number;
    appLink(s: SkippedApp): string[] | null;
    navigateToApp(link: string[], $event: Event): void;
    private hydratePreview;
    toggleBackupVolume(v: VolumeChoice): void;
    cancel(): void;
    confirm(): void;
    private initStepsFromTemplates;
    private createBinding;
    private buildStepInputs;
    private buildBindingInput;
    static ɵfac: i0.ɵɵFactoryDeclaration<AgentProfileBulkActionDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AgentProfileBulkActionDialogComponent, "tb-agent-profile-bulk-action-dialog", never, {}, {}, never, never, false, never>;
}
