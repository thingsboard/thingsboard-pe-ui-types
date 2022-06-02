import { EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { IAliasController } from '@core/api/widget-api.models';
import { TbFlotKeyThreshold } from '@home/components/widget/lib/flot-widget.models';
import * as i0 from "@angular/core";
export declare class FlotThresholdComponent extends PageComponent implements OnInit, ControlValueAccessor {
    protected store: Store<AppState>;
    private translate;
    private fb;
    disabled: boolean;
    expanded: boolean;
    aliasController: IAliasController;
    removeThreshold: EventEmitter<any>;
    private modelValue;
    private propagateChange;
    thresholdFormGroup: FormGroup;
    constructor(store: Store<AppState>, translate: TranslateService, fb: FormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: TbFlotKeyThreshold): void;
    thresholdText(): string;
    private valueSourcePropertyText;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<FlotThresholdComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FlotThresholdComponent, "tb-flot-threshold", never, { "disabled": "disabled"; "expanded": "expanded"; "aliasController": "aliasController"; }, { "removeThreshold": "removeThreshold"; }, never, never>;
}
