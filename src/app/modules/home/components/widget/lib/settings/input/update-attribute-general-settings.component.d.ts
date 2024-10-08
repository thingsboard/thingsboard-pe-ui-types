import { OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export interface UpdateAttributeGeneralSettings {
    widgetTitle: string;
    showLabel: boolean;
    labelValue?: string;
    isRequired: boolean;
    requiredErrorMessage: string;
    showResultMessage: boolean;
}
export declare function updateAttributeGeneralDefaultSettings(hasLabelValue?: boolean): UpdateAttributeGeneralSettings;
export declare class UpdateAttributeGeneralSettingsComponent extends PageComponent implements OnInit, ControlValueAccessor, Validator {
    protected store: Store<AppState>;
    private translate;
    private fb;
    disabled: boolean;
    hasLabelValue: boolean;
    private modelValue;
    private propagateChange;
    updateAttributeGeneralSettingsFormGroup: UntypedFormGroup;
    constructor(store: Store<AppState>, translate: TranslateService, fb: UntypedFormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: UpdateAttributeGeneralSettings): void;
    validate(c: UntypedFormControl): {
        updateAttributeGeneralSettings: {
            valid: boolean;
        };
    };
    private updateModel;
    private updateValidators;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpdateAttributeGeneralSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UpdateAttributeGeneralSettingsComponent, "tb-update-attribute-general-settings", never, { "disabled": { "alias": "disabled"; "required": false; }; "hasLabelValue": { "alias": "hasLabelValue"; "required": false; }; }, {}, never, never, false, never>;
}
