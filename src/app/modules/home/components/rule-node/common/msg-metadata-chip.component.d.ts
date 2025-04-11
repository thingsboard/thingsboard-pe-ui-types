import { DestroyRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import { FetchTo } from '../rule-node-config.models';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class MsgMetadataChipComponent implements OnInit, ControlValueAccessor {
    private fb;
    private translate;
    private destroyRef;
    labelText: string;
    translation: Map<FetchTo, string>;
    private propagateChange;
    chipControlGroup: FormGroup;
    selectOptions: any[];
    constructor(fb: FormBuilder, translate: TranslateService, destroyRef: DestroyRef);
    ngOnInit(): void;
    initOptions(): void;
    writeValue(value: string | null): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MsgMetadataChipComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MsgMetadataChipComponent, "tb-msg-metadata-chip", never, { "labelText": { "alias": "labelText"; "required": false; }; "translation": { "alias": "translation"; "required": false; }; }, {}, never, never, false, never>;
}
