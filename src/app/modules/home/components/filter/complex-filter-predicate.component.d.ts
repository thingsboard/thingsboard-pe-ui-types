import { OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { ComplexFilterPredicateInfo, EntityKeyValueType } from '@shared/models/query/query.models';
import { MatDialog } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';
import * as i0 from "@angular/core";
export declare class ComplexFilterPredicateComponent implements ControlValueAccessor, OnInit {
    private complexFilterPredicateDialogComponent;
    private dialog;
    disabled: boolean;
    valueType: EntityKeyValueType;
    key: string;
    displayUserParameters: boolean;
    allowUserDynamicSource: boolean;
    onlyUserDynamicSource: boolean;
    private propagateChange;
    private complexFilterPredicate;
    constructor(complexFilterPredicateDialogComponent: ComponentType<any>, dialog: MatDialog);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(predicate: ComplexFilterPredicateInfo): void;
    openComplexFilterDialog(): void;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<ComplexFilterPredicateComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ComplexFilterPredicateComponent, "tb-complex-filter-predicate", never, { "disabled": "disabled"; "valueType": "valueType"; "key": "key"; "displayUserParameters": "displayUserParameters"; "allowUserDynamicSource": "allowUserDynamicSource"; "onlyUserDynamicSource": "onlyUserDynamicSource"; }, {}, never, never, false>;
}
