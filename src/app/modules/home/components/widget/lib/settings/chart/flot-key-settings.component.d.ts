import { OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { ChartType, TbFlotKeySettings } from '@home/components/widget/lib/flot-widget.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { WidgetService } from '@core/http/widget.service';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { IAliasController } from 'src/app/core/api/widget-api.models';
import * as i0 from "@angular/core";
export declare function flotDataKeyDefaultSettings(chartType: ChartType): TbFlotKeySettings;
export declare class FlotKeySettingsComponent extends PageComponent implements OnInit, ControlValueAccessor, Validator {
    protected store: Store<AppState>;
    private translate;
    private widgetService;
    private fb;
    disabled: boolean;
    chartType: ChartType;
    aliasController: IAliasController;
    functionScopeVariables: string[];
    private modelValue;
    private propagateChange;
    flotKeySettingsFormGroup: UntypedFormGroup;
    constructor(store: Store<AppState>, translate: TranslateService, widgetService: WidgetService, fb: UntypedFormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: TbFlotKeySettings): void;
    validate(c: UntypedFormControl): {
        flotKeySettings: {
            valid: boolean;
        };
    };
    private updateModel;
    private updateValidators;
    thresholdsFormArray(): UntypedFormArray;
    trackByThreshold(index: number, thresholdControl: AbstractControl): any;
    removeThreshold(index: number): void;
    addThreshold(): void;
    thresholdDrop(event: CdkDragDrop<string[]>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FlotKeySettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FlotKeySettingsComponent, "tb-flot-key-settings", never, { "disabled": { "alias": "disabled"; "required": false; }; "chartType": { "alias": "chartType"; "required": false; }; "aliasController": { "alias": "aliasController"; "required": false; }; }, {}, never, never, false, never>;
}
