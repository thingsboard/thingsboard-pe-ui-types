import { EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { IAliasController } from '@core/api/widget-api.models';
import { TbFlotKeyThreshold } from '@home/components/widget/lib/flot-widget.models';
import * as i0 from "@angular/core";
export declare class FlotThresholdComponent extends PageComponent implements OnInit, ControlValueAccessor {
    protected store: Store<AppState>;
    private fb;
    disabled: boolean;
    aliasController: IAliasController;
    removeThreshold: EventEmitter<any>;
    private modelValue;
    private propagateChange;
    thresholdFormGroup: UntypedFormGroup;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: TbFlotKeyThreshold): void;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<FlotThresholdComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FlotThresholdComponent, "tb-flot-threshold", never, { "disabled": { "alias": "disabled"; "required": false; }; "aliasController": { "alias": "aliasController"; "required": false; }; }, { "removeThreshold": "removeThreshold"; }, never, never, false, never>;
}
