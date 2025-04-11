import { ChangeDetectorRef, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NgForm } from '@angular/forms';
import { ValueType } from '@shared/models/constants';
import { MatDialog } from '@angular/material/dialog';
import { BreakpointObserver } from '@angular/cdk/layout';
import { TranslateService } from '@ngx-translate/core';
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
    private translate;
    dialog: MatDialog;
    disabled: boolean;
    requiredText: string;
    valueType: ValueType;
    allowedValueTypes: ValueType[];
    trueLabel: string;
    falseLabel: string;
    shortBooleanField: boolean;
    required: boolean;
    hideJsonEdit: boolean;
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
    constructor(breakpointObserver: BreakpointObserver, cd: ChangeDetectorRef, translate: TranslateService, dialog: MatDialog);
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
    static ɵcmp: i0.ɵɵComponentDeclaration<ValueInputComponent, "tb-value-input", never, { "disabled": { "alias": "disabled"; "required": false; }; "requiredText": { "alias": "requiredText"; "required": false; }; "valueType": { "alias": "valueType"; "required": false; }; "allowedValueTypes": { "alias": "allowedValueTypes"; "required": false; }; "trueLabel": { "alias": "trueLabel"; "required": false; }; "falseLabel": { "alias": "falseLabel"; "required": false; }; "shortBooleanField": { "alias": "shortBooleanField"; "required": false; }; "required": { "alias": "required"; "required": false; }; "hideJsonEdit": { "alias": "hideJsonEdit"; "required": false; }; "layout": { "alias": "layout"; "required": false; }; "stringNotRequired": { "alias": "stringNotRequired"; "required": false; }; }, {}, never, never, false, never>;
}
export {};
