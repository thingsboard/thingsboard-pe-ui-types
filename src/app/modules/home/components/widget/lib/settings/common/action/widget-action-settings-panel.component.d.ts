import { EventEmitter, OnInit } from '@angular/core';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { WidgetAction, WidgetActionType, widgetType } from '@shared/models/widget.models';
import { WidgetActionCallbacks } from '@home/components/widget/action/manage-widget-actions.component.models';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class WidgetActionSettingsPanelComponent implements OnInit {
    private fb;
    private translate;
    private popover;
    widgetAction: WidgetAction;
    panelTitle: string;
    widgetType: widgetType;
    callbacks: WidgetActionCallbacks;
    withName: boolean;
    actionNames: string[];
    applyTitle: any;
    additionalWidgetActionTypes: WidgetActionType[];
    widgetActionApplied: EventEmitter<WidgetAction>;
    widgetActionFormGroup: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder, translate: TranslateService, popover: TbPopoverComponent);
    ngOnInit(): void;
    cancel(): void;
    applyWidgetAction(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetActionSettingsPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WidgetActionSettingsPanelComponent, "tb-widget-action-settings-panel", never, { "widgetAction": { "alias": "widgetAction"; "required": false; }; "panelTitle": { "alias": "panelTitle"; "required": false; }; "widgetType": { "alias": "widgetType"; "required": false; }; "callbacks": { "alias": "callbacks"; "required": false; }; "withName": { "alias": "withName"; "required": false; }; "actionNames": { "alias": "actionNames"; "required": false; }; "applyTitle": { "alias": "applyTitle"; "required": false; }; "additionalWidgetActionTypes": { "alias": "additionalWidgetActionTypes"; "required": false; }; }, { "widgetActionApplied": "widgetActionApplied"; }, never, never, false, never>;
}
