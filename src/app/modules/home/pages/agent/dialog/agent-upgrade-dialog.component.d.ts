import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '@shared/components/dialog.component';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { AgentAppEvent } from '@shared/models/agent.models';
import { AgentService } from '@core/http/agent.service';
import * as i0 from "@angular/core";
export interface AgentUpgradeDialogData {
    agentId: string;
    agentName: string;
    currentImageRef?: string;
    suggestedImageRef?: string;
}
/**
 * Collects the image the agent should replace itself with. The target is an opaque image reference
 * rather than a version number, so a digest-pinned reference is as valid as a tag; the field is
 * pre-filled with the newest published image when one is known.
 */
export declare class AgentUpgradeDialogComponent extends DialogComponent<AgentUpgradeDialogComponent, AgentAppEvent> {
    protected store: Store<AppState>;
    protected router: Router;
    private agentService;
    private fb;
    data: AgentUpgradeDialogData;
    dialogRef: MatDialogRef<AgentUpgradeDialogComponent, AgentAppEvent>;
    upgradeFormGroup: UntypedFormGroup;
    constructor(store: Store<AppState>, router: Router, agentService: AgentService, fb: UntypedFormBuilder, data: AgentUpgradeDialogData, dialogRef: MatDialogRef<AgentUpgradeDialogComponent, AgentAppEvent>);
    cancel(): void;
    upgrade(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AgentUpgradeDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AgentUpgradeDialogComponent, "tb-agent-upgrade-dialog", never, {}, {}, never, never, false, never>;
}
