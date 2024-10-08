import { EventEmitter, OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { WidgetAction, widgetType } from '@shared/models/widget.models';
import { WidgetActionCallbacks } from '@home/components/widget/action/manage-widget-actions.component.models';
import * as i0 from "@angular/core";
export declare class WidgetActionSettingsPanelComponent extends PageComponent implements OnInit {
    private fb;
    protected store: Store<AppState>;
    widgetAction: WidgetAction;
    panelTitle: string;
    widgetType: widgetType;
    callbacks: WidgetActionCallbacks;
    popover: TbPopoverComponent<WidgetActionSettingsPanelComponent>;
    widgetActionApplied: EventEmitter<WidgetAction>;
    widgetActionFormGroup: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder, store: Store<AppState>);
    ngOnInit(): void;
    cancel(): void;
    applyWidgetAction(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetActionSettingsPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WidgetActionSettingsPanelComponent, "tb-widget-action-settings-panel", never, { "widgetAction": { "alias": "widgetAction"; "required": false; }; "panelTitle": { "alias": "panelTitle"; "required": false; }; "widgetType": { "alias": "widgetType"; "required": false; }; "callbacks": { "alias": "callbacks"; "required": false; }; "popover": { "alias": "popover"; "required": false; }; }, { "widgetActionApplied": "widgetActionApplied"; }, never, never, false, never>;
}
