import { ElementRef, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormControl } from '@angular/forms';
import { IAliasController } from '@core/api/widget-api.models';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class EntityAliasInputComponent implements ControlValueAccessor, OnInit {
    private fb;
    hostClass: string;
    entityAliasInput: ElementRef;
    disabled: boolean;
    required: boolean;
    aliasController: IAliasController;
    entityAliasFormControl: UntypedFormControl;
    filteredEntityAliases: Observable<Array<string>>;
    aliasSearchText: string;
    private entityAliasList;
    private entityAliasDirty;
    private propagateChange;
    constructor(fb: UntypedFormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: string): void;
    onEntityAliasFocus(): void;
    clearEntityAlias(): void;
    private fetchEntityAliases;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityAliasInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityAliasInputComponent, "tb-entity-alias-input", never, { "disabled": "disabled"; "required": "required"; "aliasController": "aliasController"; }, {}, never, never, false, never>;
}