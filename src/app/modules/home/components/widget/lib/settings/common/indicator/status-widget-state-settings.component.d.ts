import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { StatusWidgetLayout, StatusWidgetStateSettings } from '@home/components/widget/lib/indicator/status-widget.models';
import * as i0 from "@angular/core";
export declare class StatusWidgetStateSettingsComponent implements OnInit, OnChanges, ControlValueAccessor {
    private fb;
    StatusWidgetLayout: typeof StatusWidgetLayout;
    disabled: boolean;
    layout: StatusWidgetLayout;
    private modelValue;
    private propagateChange;
    stateSettingsFormGroup: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: StatusWidgetStateSettings): void;
    private updateValidators;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<StatusWidgetStateSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StatusWidgetStateSettingsComponent, "tb-status-widget-state-settings", never, { "disabled": { "alias": "disabled"; "required": false; }; "layout": { "alias": "layout"; "required": false; }; }, {}, never, never, false, never>;
}
