import { OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { HereMapProvider, HereMapProviderSettings } from '@home/components/widget/lib/maps/map-models';
import * as i0 from "@angular/core";
export declare class HereMapProviderSettingsComponent extends PageComponent implements OnInit, ControlValueAccessor, Validator {
    protected store: Store<AppState>;
    private translate;
    private fb;
    disabled: boolean;
    private modelValue;
    private propagateChange;
    providerSettingsFormGroup: UntypedFormGroup;
    hereMapProviders: HereMapProvider[];
    hereMapProviderTranslations: Map<HereMapProvider, string>;
    constructor(store: Store<AppState>, translate: TranslateService, fb: UntypedFormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: HereMapProviderSettings): void;
    validate(c: UntypedFormControl): {
        hereMapProviderSettings: {
            valid: boolean;
        };
    };
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<HereMapProviderSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HereMapProviderSettingsComponent, "tb-here-map-provider-settings", never, { "disabled": "disabled"; }, {}, never, never, false, never>;
}
