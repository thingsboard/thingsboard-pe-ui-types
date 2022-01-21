import { OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { BooleanOperation, EntityKeyValueType, KeyFilterPredicateUserInfo, NumericOperation, StringOperation } from '@shared/models/query/query.models';
import { MatDialog } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare class FilterUserInfoComponent implements ControlValueAccessor, OnInit {
    private dialog;
    disabled: boolean;
    key: string;
    operation: StringOperation | BooleanOperation | NumericOperation;
    valueType: EntityKeyValueType;
    private propagateChange;
    private keyFilterPredicateUserInfo;
    constructor(dialog: MatDialog);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    writeValue(keyFilterPredicateUserInfo: KeyFilterPredicateUserInfo): void;
    openFilterUserInfoDialog(): void;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterUserInfoComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FilterUserInfoComponent, "tb-filter-user-info", never, { "disabled": "disabled"; "key": "key"; "operation": "operation"; "valueType": "valueType"; }, {}, never, never>;
}
