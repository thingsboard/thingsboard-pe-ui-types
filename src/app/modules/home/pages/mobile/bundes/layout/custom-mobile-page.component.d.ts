import { ControlValueAccessor, FormBuilder, ValidationErrors, Validator } from '@angular/forms';
import { CustomMobilePage, MobilePageType } from '@shared/models/mobile-app.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class CustomMobilePageComponent implements ControlValueAccessor, Validator {
    private fb;
    private store;
    disabled: boolean;
    mobilePagesTypes: MobilePageType[];
    MobilePageType: typeof MobilePageType;
    mobilePageTypeTranslations: Map<MobilePageType, string>;
    customMobilePageForm: import("@angular/forms").FormGroup<{
        visible: import("@angular/forms").FormControl<boolean>;
        icon: import("@angular/forms").FormControl<string>;
        label: import("@angular/forms").FormControl<string>;
        type: import("@angular/forms").FormControl<MobilePageType>;
        dashboardId: import("@angular/forms").FormControl<string>;
        url: import("@angular/forms").FormControl<string>;
        path: import("@angular/forms").FormControl<string>;
    }>;
    private propagateChange;
    constructor(fb: FormBuilder, store: Store<AppState>);
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    validate(): ValidationErrors | null;
    writeValue(value: CustomMobilePage): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomMobilePageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomMobilePageComponent, "tb-mobile-page-item", never, { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
    static ngAcceptInputType_disabled: unknown;
}
