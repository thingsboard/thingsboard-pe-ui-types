import { OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, Validator } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { MapProviders, MapProviderSettings } from '@home/components/widget/lib/maps/map-models';
import { IAliasController } from '@core/api/widget-api.models';
import * as i0 from "@angular/core";
export declare class MapProviderSettingsComponent extends PageComponent implements OnInit, ControlValueAccessor, Validator {
    protected store: Store<AppState>;
    private translate;
    private fb;
    aliasController: IAliasController;
    disabled: boolean;
    ignoreImageMap: boolean;
    private modelValue;
    private propagateChange;
    providerSettingsFormGroup: FormGroup;
    mapProviders: MapProviders[];
    mapProvider: typeof MapProviders;
    mapProviderTranslations: Map<MapProviders, string>;
    constructor(store: Store<AppState>, translate: TranslateService, fb: FormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: MapProviderSettings): void;
    validate(c: FormControl): {
        mapProviderSettings: {
            valid: boolean;
        };
    };
    private updateModel;
    private updateValidators;
    static ɵfac: i0.ɵɵFactoryDeclaration<MapProviderSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MapProviderSettingsComponent, "tb-map-provider-settings", never, { "aliasController": "aliasController"; "disabled": "disabled"; "ignoreImageMap": "ignoreImageMap"; }, {}, never, never>;
}
