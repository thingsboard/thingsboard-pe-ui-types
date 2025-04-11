import { DestroyRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class SelectAttributesComponent implements OnInit, ControlValueAccessor {
    translate: TranslateService;
    private fb;
    private destroyRef;
    private propagateChange;
    attributeControlGroup: FormGroup;
    separatorKeysCodes: number[];
    onTouched: () => void;
    popupHelpLink: string;
    constructor(translate: TranslateService, fb: FormBuilder, destroyRef: DestroyRef);
    ngOnInit(): void;
    private preparePropagateValue;
    validate(): {
        atLeastOneRequired: boolean;
    };
    private atLeastOne;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectAttributesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectAttributesComponent, "tb-select-attributes", never, { "popupHelpLink": { "alias": "popupHelpLink"; "required": false; }; }, {}, never, never, false, never>;
}
