import { OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Country, CountryData } from '@shared/models/country.models';
import { FloatLabelType, MatFormFieldAppearance } from '@angular/material/form-field/form-field';
import * as i0 from "@angular/core";
export declare class PhoneInputComponent implements OnInit, ControlValueAccessor, Validator {
    private translate;
    private fb;
    private countryCodeData;
    disabled: boolean;
    defaultCountry: string;
    enableFlagsSelect: boolean;
    required: boolean;
    floatLabel: FloatLabelType;
    appearance: MatFormFieldAppearance;
    placeholder: any;
    label: string;
    allCountries: Array<Country>;
    phonePlaceholder: string;
    flagIcon: string;
    phoneFormGroup: FormGroup;
    private isLoading;
    get isLoad(): boolean;
    set isLoad(value: boolean);
    private getExampleNumber;
    private parsePhoneNumberFromString;
    private baseCode;
    private countryCallingCode;
    private modelValue;
    private changeSubscriptions;
    private propagateChange;
    constructor(translate: TranslateService, fb: FormBuilder, countryCodeData: CountryData);
    ngOnInit(): void;
    ngOnDestroy(): void;
    focus(): void;
    private getFlagAndPhoneNumberData;
    private getPhoneNumberData;
    private getFlagIcon;
    validatePhoneNumber(): ValidatorFn;
    private defineCountryFromNumber;
    private getPhoneNumberPattern;
    validate(): ValidationErrors | null;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(phoneNumber: any): void;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<PhoneInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PhoneInputComponent, "tb-phone-input", never, { "disabled": "disabled"; "defaultCountry": "defaultCountry"; "enableFlagsSelect": "enableFlagsSelect"; "required": "required"; "floatLabel": "floatLabel"; "appearance": "appearance"; "placeholder": "placeholder"; "label": "label"; }, {}, never, never>;
}
