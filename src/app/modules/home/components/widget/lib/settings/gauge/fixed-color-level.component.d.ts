import { ValueSourceProperty } from '@home/components/widget/lib/settings/common/value-source.component';
import { EventEmitter, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, FormGroup, ValidationErrors } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { IAliasController } from '@core/api/widget-api.models';
import * as i0 from "@angular/core";
export interface FixedColorLevel {
    from?: ValueSourceProperty;
    to?: ValueSourceProperty;
    color: string;
}
export declare function fixedColorLevelValidator(control: AbstractControl): ValidationErrors | null;
export declare class FixedColorLevelComponent extends PageComponent implements OnInit, ControlValueAccessor {
    protected store: Store<AppState>;
    private translate;
    private fb;
    disabled: boolean;
    expanded: boolean;
    aliasController: IAliasController;
    removeFixedColorLevel: EventEmitter<any>;
    private modelValue;
    private propagateChange;
    fixedColorLevelFormGroup: FormGroup;
    constructor(store: Store<AppState>, translate: TranslateService, fb: FormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: FixedColorLevel): void;
    fixedColorLevelRangeText(): string;
    private valueSourcePropertyText;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<FixedColorLevelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FixedColorLevelComponent, "tb-fixed-color-level", never, { "disabled": "disabled"; "expanded": "expanded"; "aliasController": "aliasController"; }, { "removeFixedColorLevel": "removeFixedColorLevel"; }, never, never>;
}
