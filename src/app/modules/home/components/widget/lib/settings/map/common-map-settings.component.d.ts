import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { CommonMapSettings, MapProviders } from '@home/components/widget/lib/maps/map-models';
import { Widget } from '@shared/models/widget.models';
import * as i0 from "@angular/core";
export declare class CommonMapSettingsComponent extends PageComponent implements OnInit, ControlValueAccessor, Validator, OnChanges {
    protected store: Store<AppState>;
    private translate;
    private fb;
    disabled: boolean;
    provider: MapProviders;
    widget: Widget;
    mapProvider: typeof MapProviders;
    private modelValue;
    private propagateChange;
    commonMapSettingsFormGroup: UntypedFormGroup;
    constructor(store: Store<AppState>, translate: TranslateService, fb: UntypedFormBuilder);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: CommonMapSettings): void;
    validate(c: UntypedFormControl): {
        commonMapSettings: {
            valid: boolean;
        };
    };
    private updateModel;
    private updateValidators;
    static ɵfac: i0.ɵɵFactoryDeclaration<CommonMapSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CommonMapSettingsComponent, "tb-common-map-settings", never, { "disabled": { "alias": "disabled"; "required": false; }; "provider": { "alias": "provider"; "required": false; }; "widget": { "alias": "widget"; "required": false; }; }, {}, never, never, false, never>;
}
