import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '@shared/components/dialog.component';
import { TranslateService } from '@ngx-translate/core';
import { AgentService } from '@core/http/agent.service';
import { AgentAppProfile, AgentAppTemplate } from '@shared/models/agent.models';
import * as i0 from "@angular/core";
export interface AgentAppProfileUpgradeDialogData {
    profile: AgentAppProfile;
}
export declare class AgentAppProfileUpgradeDialogComponent extends DialogComponent<AgentAppProfileUpgradeDialogComponent, AgentAppProfile | null> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    protected translate: TranslateService;
    private agentService;
    data: AgentAppProfileUpgradeDialogData;
    dialogRef: MatDialogRef<AgentAppProfileUpgradeDialogComponent, AgentAppProfile | null>;
    profile: AgentAppProfile;
    mergedProfile: AgentAppProfile | null;
    fromVersion: string | null;
    toVersion: string | null;
    template: AgentAppTemplate | null;
    proposedYaml: string;
    currentYaml: string;
    composeYaml: string;
    diffSyncScroll: boolean;
    loadingTemplate: boolean;
    loadError: string;
    submitting: boolean;
    constructor(store: Store<AppState>, router: Router, translate: TranslateService, agentService: AgentService, data: AgentAppProfileUpgradeDialogData, dialogRef: MatDialogRef<AgentAppProfileUpgradeDialogComponent, AgentAppProfile | null>);
    ngOnInit(): void;
    cancel(): void;
    canSubmit(): boolean;
    isComposeYamlInvalid(): boolean;
    submit(): void;
    private resolveUpgradeTemplate;
    private applyUpgradeTemplate;
    private finishApplyTemplate;
    private composeOf;
    private failLoad;
    static ɵfac: i0.ɵɵFactoryDeclaration<AgentAppProfileUpgradeDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AgentAppProfileUpgradeDialogComponent, "tb-agent-app-profile-upgrade-dialog", never, {}, {}, never, never, false, never>;
}
