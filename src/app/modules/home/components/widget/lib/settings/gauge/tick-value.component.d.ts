import { ValueSourceProperty } from '@home/components/widget/lib/settings/common/value-source.component';
import { EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { IAliasController } from '@core/api/widget-api.models';
import * as i0 from "@angular/core";
export declare class TickValueComponent extends PageComponent implements OnInit, ControlValueAccessor {
    protected store: Store<AppState>;
    private translate;
    private fb;
    disabled: boolean;
    expanded: boolean;
    aliasController: IAliasController;
    removeTickValue: EventEmitter<any>;
    private modelValue;
    private propagateChange;
    tickValueFormGroup: FormGroup;
    constructor(store: Store<AppState>, translate: TranslateService, fb: FormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: ValueSourceProperty): void;
    tickValueText(): string;
    private valueSourcePropertyText;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<TickValueComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TickValueComponent, "tb-tick-value", never, { "disabled": "disabled"; "expanded": "expanded"; "aliasController": "aliasController"; }, { "removeTickValue": "removeTickValue"; }, never, never>;
}