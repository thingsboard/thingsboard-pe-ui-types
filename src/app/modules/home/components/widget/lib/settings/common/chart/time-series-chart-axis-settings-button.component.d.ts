import { OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { TbPopoverService } from '@shared/components/popover.service';
import { TimeSeriesChartAxisSettings } from '@home/components/widget/lib/chart/time-series-chart.models';
import * as i0 from "@angular/core";
export declare class TimeSeriesChartAxisSettingsButtonComponent implements OnInit, ControlValueAccessor {
    private popoverService;
    private renderer;
    private viewContainerRef;
    disabled: boolean;
    axisType: 'xAxis' | 'yAxis';
    panelTitle: string;
    advanced: boolean;
    private modelValue;
    private propagateChange;
    constructor(popoverService: TbPopoverService, renderer: Renderer2, viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: TimeSeriesChartAxisSettings): void;
    openAxisSettingsPopup($event: Event, matButton: MatButton): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeSeriesChartAxisSettingsButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimeSeriesChartAxisSettingsButtonComponent, "tb-time-series-chart-axis-settings-button", never, { "disabled": { "alias": "disabled"; "required": false; }; "axisType": { "alias": "axisType"; "required": false; }; "panelTitle": { "alias": "panelTitle"; "required": false; }; "advanced": { "alias": "advanced"; "required": false; }; }, {}, never, never, false, never>;
}
