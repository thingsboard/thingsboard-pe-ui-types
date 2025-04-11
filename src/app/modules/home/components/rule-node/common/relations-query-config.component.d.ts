import { DestroyRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import { EntitySearchDirection, PageComponent } from '@shared/public-api';
import { RelationsQuery } from '../rule-node-config.models';
import * as i0 from "@angular/core";
export declare class RelationsQueryConfigComponent extends PageComponent implements ControlValueAccessor, OnInit {
    private fb;
    private destroyRef;
    disabled: boolean;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    directionTypes: Array<EntitySearchDirection>;
    directionTypeTranslations: Map<EntitySearchDirection, string>;
    relationsQueryFormGroup: FormGroup;
    private propagateChange;
    constructor(fb: FormBuilder, destroyRef: DestroyRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(query: RelationsQuery): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RelationsQueryConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RelationsQueryConfigComponent, "tb-relations-query-config", never, { "disabled": { "alias": "disabled"; "required": false; }; "required": { "alias": "required"; "required": false; }; }, {}, never, never, false, never>;
}
