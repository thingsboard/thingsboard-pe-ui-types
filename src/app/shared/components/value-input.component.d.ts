import { ChangeDetectorRef, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NgForm } from '@angular/forms';
import { ValueType } from '@shared/models/constants';
import { MatDialog } from '@angular/material/dialog';
import { BreakpointObserver } from '@angular/cdk/layout';
import * as i0 from "@angular/core";
type Layout = 'column' | 'row';
export interface ValueInputLayout {
    layout: Layout;
    breakpoints?: {
        [breakpoint: string]: Layout;
    };
}
export declare class ValueInputComponent implements OnInit, OnDestroy, OnChanges, ControlValueAccessor {
    private breakpointObserver;
    private cd;
    dialog: MatDialog;
    disabled: boolean;
    requiredText: string;
    valueType: ValueType;
    trueLabel: string;
    falseLabel: string;
    layout: ValueInputLayout | Layout;
    inputForm: NgForm;
    stringNotRequired: boolean;
    modelValue: any;
    valueTypeEnum: typeof ValueType;
    valueTypeKeys: string[];
    valueTypes: Map<ValueType, import("@shared/models/constants").ValueTypeData>;
    showValueType: boolean;
    computedLayout: Layout;
    private propagateChange;
    private _subscription;
    constructor(breakpointObserver: BreakpointObserver, cd: ChangeDetectorRef, dialog: MatDialog);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    openEditJSONDialog($event: Event): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: any): void;
    updateView(): void;
    onValueTypeChanged(): void;
    onValueChanged(): void;
    private detectValueType;
    private updateModelToValueType;
    private _computeLayout;
    static ɵfac: i0.ɵɵFactoryDeclaration<ValueInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ValueInputComponent, "tb-value-input", never, { "disabled": "disabled"; "requiredText": "requiredText"; "valueType": "valueType"; "trueLabel": "trueLabel"; "falseLabel": "falseLabel"; "layout": "layout"; "stringNotRequired": "stringNotRequired"; }, {}, never, never, false, never>;
}
export {};
