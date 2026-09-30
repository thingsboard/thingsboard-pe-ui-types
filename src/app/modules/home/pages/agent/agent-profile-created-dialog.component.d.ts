import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '@shared/components/dialog.component';
import { TranslateService } from '@ngx-translate/core';
import { AgentProfile } from '@shared/models/agent.models';
import * as i0 from "@angular/core";
export interface AgentProfileCreatedDialogData {
    agentProfile: AgentProfile;
    dockerCommand: string;
}
export declare class AgentProfileCreatedDialogComponent extends DialogComponent<AgentProfileCreatedDialogComponent> {
    protected store: Store<AppState>;
    protected router: Router;
    protected translate: TranslateService;
    data: AgentProfileCreatedDialogData;
    dialogRef: MatDialogRef<AgentProfileCreatedDialogComponent>;
    agentProfile: AgentProfile;
    dockerCommand: string;
    agentProvisionTypeTranslationMap: Map<import("@shared/models/agent.models").AgentProvisionType, string>;
    agentProvisionTypeDescriptionMap: Map<import("@shared/models/agent.models").AgentProvisionType, string>;
    get autoInstallEnabled(): boolean;
    constructor(store: Store<AppState>, router: Router, translate: TranslateService, data: AgentProfileCreatedDialogData, dialogRef: MatDialogRef<AgentProfileCreatedDialogComponent>);
    onCopied(): void;
    close(): void;
    goToProfile(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AgentProfileCreatedDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AgentProfileCreatedDialogComponent, "tb-agent-profile-created-dialog", never, {}, {}, never, never, false, never>;
}
