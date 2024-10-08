import { OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { ChartType, TbFlotSettings } from '@home/components/widget/lib/flot-widget.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { WidgetService } from '@core/http/widget.service';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
export declare const flotDefaultSettings: (chartType: ChartType) => Partial<TbFlotSettings>;
export declare class FlotWidgetSettingsComponent extends PageComponent implements OnInit, ControlValueAccessor, Validator {
    protected store: Store<AppState>;
    private translate;
    private widgetService;
    private fb;
    disabled: boolean;
    chartType: ChartType;
    functionScopeVariables: string[];
    private modelValue;
    private propagateChange;
    flotSettingsFormGroup: UntypedFormGroup;
    constructor(store: Store<AppState>, translate: TranslateService, widgetService: WidgetService, fb: UntypedFormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: TbFlotSettings): void;
    validate(c: UntypedFormControl): {
        flotSettings: {
            valid: boolean;
        };
    };
    private updateModel;
    private updateValidators;
    dataKeysListForLabelsFormArray(): UntypedFormArray;
    trackByLabelDataKey(index: number, labelDataKeyControl: AbstractControl): any;
    removeLabelDataKey(index: number): void;
    addLabelDataKey(): void;
    labelDataKeyDrop(event: CdkDragDrop<string[]>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FlotWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FlotWidgetSettingsComponent, "tb-flot-widget-settings", never, { "disabled": { "alias": "disabled"; "required": false; }; "chartType": { "alias": "chartType"; "required": false; }; }, {}, never, never, false, never>;
}
