import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '@shared/components/dialog.component';
import * as i0 from "@angular/core";
export type AgentAppVersionWarningContext = 'assign' | 'update';
export type AgentAppVersionWarningResult = boolean | 'upgrade';
export interface AgentAppVersionWarningDialogData {
    context: AgentAppVersionWarningContext;
    appName: string;
    profileName: string;
    appVersion: string;
    profileVersion: string;
    nextVersion?: string | null;
}
export declare class AgentAppVersionWarningDialogComponent extends DialogComponent<AgentAppVersionWarningDialogComponent, AgentAppVersionWarningResult> {
    protected store: Store<AppState>;
    protected router: Router;
    data: AgentAppVersionWarningDialogData;
    dialogRef: MatDialogRef<AgentAppVersionWarningDialogComponent, AgentAppVersionWarningResult>;
    readonly upgradeAvailable: boolean;
    readonly titleKey: string;
    readonly textKey: string;
    readonly confirmKey: string;
    constructor(store: Store<AppState>, router: Router, data: AgentAppVersionWarningDialogData, dialogRef: MatDialogRef<AgentAppVersionWarningDialogComponent, AgentAppVersionWarningResult>);
    get destructive(): boolean;
    get showUpgradeFirst(): boolean;
    cancel(): void;
    confirm(): void;
    upgradeFirst(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AgentAppVersionWarningDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AgentAppVersionWarningDialogComponent, "tb-agent-app-version-warning-dialog", never, {}, {}, never, never, false, never>;
}
