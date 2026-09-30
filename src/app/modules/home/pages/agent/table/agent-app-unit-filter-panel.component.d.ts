import { InjectionToken } from '@angular/core';
import { OverlayRef } from '@angular/cdk/overlay';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { AgentAppUnitType } from '@shared/models/agent.models';
import * as i0 from "@angular/core";
export interface AgentAppUnitFilterValue {
    type: AgentAppUnitType | null;
}
export interface AgentAppUnitFilterPanelData {
    value: AgentAppUnitFilterValue;
}
export declare const AGENT_APP_UNIT_FILTER_PANEL_DATA: InjectionToken<AgentAppUnitFilterPanelData>;
export declare class AgentAppUnitFilterPanelComponent {
    data: AgentAppUnitFilterPanelData;
    private overlayRef;
    private fb;
    readonly typeOptions: AgentAppUnitType[];
    readonly typeTranslationMap: Map<AgentAppUnitType, string>;
    readonly filterForm: UntypedFormGroup;
    result: AgentAppUnitFilterValue | null;
    constructor(data: AgentAppUnitFilterPanelData, overlayRef: OverlayRef, fb: UntypedFormBuilder);
    reset(): void;
    cancel(): void;
    apply(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AgentAppUnitFilterPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AgentAppUnitFilterPanelComponent, "tb-agent-app-unit-filter-panel", never, {}, {}, never, never, false, never>;
}
