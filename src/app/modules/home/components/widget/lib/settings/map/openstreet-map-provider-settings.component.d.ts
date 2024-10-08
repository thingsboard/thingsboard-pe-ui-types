import { OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { OpenStreetMapProvider, OpenStreetMapProviderSettings } from '@home/components/widget/lib/maps/map-models';
import * as i0 from "@angular/core";
export declare class OpenStreetMapProviderSettingsComponent extends PageComponent implements OnInit, ControlValueAccessor, Validator {
    protected store: Store<AppState>;
    private translate;
    private fb;
    disabled: boolean;
    private modelValue;
    private propagateChange;
    providerSettingsFormGroup: UntypedFormGroup;
    mapProviders: OpenStreetMapProvider[];
    openStreetMapProviderTranslations: Map<OpenStreetMapProvider, string>;
    constructor(store: Store<AppState>, translate: TranslateService, fb: UntypedFormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: OpenStreetMapProviderSettings): void;
    validate(c: UntypedFormControl): {
        openStreetProviderSettings: {
            valid: boolean;
        };
    };
    private updateModel;
    private updateValidators;
    static ɵfac: i0.ɵɵFactoryDeclaration<OpenStreetMapProviderSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OpenStreetMapProviderSettingsComponent, "tb-openstreet-map-provider-settings", never, { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
