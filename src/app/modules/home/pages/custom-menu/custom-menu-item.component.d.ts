import { OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { CMItemLinkType, CMItemType, CMScope, CustomMenuItem } from '@shared/models/custom-menu.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class CustomMenuItemComponent implements ControlValueAccessor, OnInit, Validator {
    private fb;
    private store;
    CMItemType: typeof CMItemType;
    CMItemLinkType: typeof CMItemLinkType;
    cmItemTypes: CMItemType[];
    cmItemTypeTranslations: Map<CMItemType, string>;
    cmLinkTypes: CMItemLinkType[];
    cmLinkTypeTranslations: Map<CMItemLinkType, string>;
    disabled: boolean;
    scope: CMScope;
    menuItemTypeEditable: boolean;
    linkTypeEditable: boolean;
    modelValue: CustomMenuItem;
    menuItemFormGroup: UntypedFormGroup;
    private propagateChange;
    constructor(fb: UntypedFormBuilder, store: Store<AppState>);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: CustomMenuItem): void;
    validate(_c: UntypedFormControl): {
        invalidCustomMenuItem: boolean;
    };
    private updateValidators;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomMenuItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomMenuItemComponent, "tb-custom-menu-item", never, { "disabled": "disabled"; "scope": "scope"; "menuItemTypeEditable": "menuItemTypeEditable"; }, {}, never, never, false, never>;
}
