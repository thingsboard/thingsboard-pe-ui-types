import { OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { WidgetConfigComponent } from '@home/components/widget/widget-config.component';
import { WidgetConfig, widgetType } from '@shared/models/widget.models';
import { Timewindow } from '@shared/models/time/time.models';
import { TranslateService } from '@ngx-translate/core';
import { TimewindowStyle } from '@shared/models/widget-settings.models';
import * as i0 from "@angular/core";
export interface TimewindowConfigData {
    useDashboardTimewindow: boolean;
    displayTimewindow: boolean;
    timewindow: Timewindow;
    timewindowStyle: TimewindowStyle;
}
export declare const getTimewindowConfig: (config: WidgetConfig) => TimewindowConfigData;
export declare const setTimewindowConfig: (config: WidgetConfig, data: TimewindowConfigData) => void;
export declare class TimewindowConfigPanelComponent implements ControlValueAccessor, OnInit {
    private fb;
    translate: TranslateService;
    private widgetConfigComponent;
    widgetTypes: typeof widgetType;
    get widgetType(): widgetType;
    disabled: boolean;
    onlyHistoryTimewindow: boolean;
    timewindowConfig: UntypedFormGroup;
    private propagateChange;
    constructor(fb: UntypedFormBuilder, translate: TranslateService, widgetConfigComponent: WidgetConfigComponent);
    ngOnInit(): void;
    writeValue(data?: TimewindowConfigData): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    private updateTimewindowConfigEnabledState;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimewindowConfigPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimewindowConfigPanelComponent, "tb-timewindow-config-panel", never, { "disabled": { "alias": "disabled"; "required": false; }; "onlyHistoryTimewindow": { "alias": "onlyHistoryTimewindow"; "required": false; }; }, {}, never, never, false, never>;
}
