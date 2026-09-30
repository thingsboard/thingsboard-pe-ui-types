import { OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '@shared/components/dialog.component';
import { TranslateService } from '@ngx-translate/core';
import { AgentService } from '@core/http/agent.service';
import { AgentApplication, AgentAppEvent, AgentAppEventActionType, AgentProcessingStatus, AgentAppStep, AgentAppTemplate } from '@shared/models/agent.models';
import { DialogService } from '@core/services/dialog.service';
import * as i0 from "@angular/core";
export interface AgentAppEventProgressDialogData {
    application: AgentApplication | null;
    event: AgentAppEvent;
}
interface ProgressStepView {
    step: AgentAppStep;
    index: number;
    state: 'completed' | 'processing' | 'pending' | 'error';
}
export declare class AgentAppEventProgressDialogComponent extends DialogComponent<AgentAppEventProgressDialogComponent, boolean> implements OnInit, OnDestroy {
    protected store: Store<AppState>;
    protected router: Router;
    protected translate: TranslateService;
    private agentService;
    private dialogService;
    data: AgentAppEventProgressDialogData;
    dialogRef: MatDialogRef<AgentAppEventProgressDialogComponent, boolean>;
    application: AgentApplication | null;
    event: AgentAppEvent;
    template: AgentAppTemplate | null;
    steps: ProgressStepView[];
    loading: boolean;
    loadError: string;
    agentAppEventActionTypeTranslationMap: Map<AgentAppEventActionType, string>;
    agentProcessingStatusTranslationMap: Map<AgentProcessingStatus, string>;
    private pollSub;
    constructor(store: Store<AppState>, router: Router, translate: TranslateService, agentService: AgentService, dialogService: DialogService, data: AgentAppEventProgressDialogData, dialogRef: MatDialogRef<AgentAppEventProgressDialogComponent, boolean>);
    ngOnInit(): void;
    ngOnDestroy(): void;
    get isAgentScoped(): boolean;
    /** Agent-scoped events have no application, so the header names the action instead. */
    get subjectName(): string;
    get statusKey(): string;
    get actionKey(): string;
    get statusBadgeClass(): string;
    get isTerminal(): boolean;
    get hasError(): boolean;
    get canCancel(): boolean;
    cancel(): void;
    viewInEvents($event: Event): void;
    cancelEvent($event: Event): void;
    private startPollingIfNeeded;
    private stopPolling;
    private refreshEventOnce;
    private rebuildSteps;
    /**
     * Which of the two synthetic steps is running is told by the event's own status rather than by
     * currentStepId: the server generates those ids per event, so there is nothing stable to match
     * them against. Prepare is done as soon as anything past it is happening.
     */
    private rebuildAgentUpgradeSteps;
    private activeAgentUpgradeStepIndex;
    static ɵfac: i0.ɵɵFactoryDeclaration<AgentAppEventProgressDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AgentAppEventProgressDialogComponent, "tb-agent-app-event-progress-dialog", never, {}, {}, never, never, false, never>;
}
export {};
