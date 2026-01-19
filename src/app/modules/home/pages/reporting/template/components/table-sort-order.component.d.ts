import { DestroyRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { TableSortOrder } from '@shared/models/report-component.models';
import { Direction } from '@shared/models/page/sort-order';
import * as i0 from "@angular/core";
export declare class TableSortOrderComponent implements OnInit, ControlValueAccessor, OnChanges {
    private fb;
    private destroyRef;
    Direction: typeof Direction;
    set columnNameChange(args: [string, string]);
    columns: string[];
    disabled: boolean;
    private modelValue;
    private propagateChange;
    tableSortOrderFormGroup: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder, destroyRef: DestroyRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: TableSortOrder): void;
    private updateModel;
    private checkColumn;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableSortOrderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableSortOrderComponent, "tb-table-sort-order", never, { "columnNameChange": { "alias": "columnNameChange"; "required": false; }; "columns": { "alias": "columns"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
