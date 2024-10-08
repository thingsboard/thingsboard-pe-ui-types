import { EventEmitter, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup, ValidationErrors } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { DataKeyType } from '@shared/models/telemetry/telemetry.models';
import * as i0 from "@angular/core";
export interface LabelDataKey {
    name: string;
    type: DataKeyType;
}
export declare function labelDataKeyValidator(control: AbstractControl): ValidationErrors | null;
export declare class LabelDataKeyComponent extends PageComponent implements OnInit, ControlValueAccessor {
    protected store: Store<AppState>;
    private translate;
    private fb;
    disabled: boolean;
    expanded: boolean;
    removeLabelDataKey: EventEmitter<any>;
    private modelValue;
    private propagateChange;
    labelDataKeyFormGroup: UntypedFormGroup;
    constructor(store: Store<AppState>, translate: TranslateService, fb: UntypedFormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: LabelDataKey): void;
    labelDataKeyText(): string;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<LabelDataKeyComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LabelDataKeyComponent, "tb-label-data-key", never, { "disabled": { "alias": "disabled"; "required": false; }; "expanded": { "alias": "expanded"; "required": false; }; }, { "removeLabelDataKey": "removeLabelDataKey"; }, never, never, false, never>;
}
