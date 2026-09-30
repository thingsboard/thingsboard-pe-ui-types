import { OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { ComplexOperation, KeyFilter } from '@shared/models/query/query.models';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import * as i0 from "@angular/core";
export declare class FilterTextComponent implements ControlValueAccessor, OnChanges {
    private translate;
    private datePipe;
    required: boolean;
    disabled: boolean;
    noFilterText: any;
    addFilterPrompt: any;
    nowrap: boolean;
    operation: ComplexOperation;
    requiredClass: boolean;
    filterText: string;
    private currentValue;
    constructor(translate: TranslateService, datePipe: DatePipe);
    registerOnChange(_fn: any): void;
    registerOnTouched(_fn: any): void;
    ngOnChanges(changes: SimpleChanges): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: Array<KeyFilter>): void;
    private updateFilterText;
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterTextComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FilterTextComponent, "tb-filter-text", never, { "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "noFilterText": { "alias": "noFilterText"; "required": false; }; "addFilterPrompt": { "alias": "addFilterPrompt"; "required": false; }; "nowrap": { "alias": "nowrap"; "required": false; }; "operation": { "alias": "operation"; "required": false; }; }, {}, never, never, false, never>;
}
