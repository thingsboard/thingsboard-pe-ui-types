import { InjectionToken } from '@angular/core';
import { OverlayRef } from '@angular/cdk/overlay';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { AgentAppEventActionType, AgentProcessingStatus } from '@shared/models/agent.models';
import * as i0 from "@angular/core";
export interface AgentAppEventFilterValue {
    actionType: AgentAppEventActionType | null;
    processingStatus: AgentProcessingStatus | null;
}
export interface AgentAppEventFilterPanelData {
    value: AgentAppEventFilterValue;
}
export declare const AGENT_APP_EVENT_FILTER_PANEL_DATA: InjectionToken<AgentAppEventFilterPanelData>;
export declare class AgentAppEventFilterPanelComponent {
    data: AgentAppEventFilterPanelData;
    private overlayRef;
    private fb;
    readonly actionOptions: (AgentAppEventActionType.INSTALL | AgentAppEventActionType.UPDATE | AgentAppEventActionType.DELETE | AgentAppEventActionType.RESTART | AgentAppEventActionType.UPGRADE | AgentAppEventActionType.AGENT_UPGRADE)[];
    readonly statusOptions: AgentProcessingStatus[];
    readonly actionTypeTranslationMap: Map<AgentAppEventActionType, string>;
    readonly statusTranslationMap: Map<AgentProcessingStatus, string>;
    readonly filterForm: UntypedFormGroup;
    result: AgentAppEventFilterValue | null;
    constructor(data: AgentAppEventFilterPanelData, overlayRef: OverlayRef, fb: UntypedFormBuilder);
    reset(): void;
    cancel(): void;
    apply(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AgentAppEventFilterPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AgentAppEventFilterPanelComponent, "tb-agent-app-event-filter-panel", never, {}, {}, never, never, false, never>;
}
