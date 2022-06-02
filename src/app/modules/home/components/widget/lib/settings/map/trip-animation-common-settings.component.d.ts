import { OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, Validator } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { TripAnimationCommonSettings } from '@home/components/widget/lib/maps/map-models';
import { Widget } from '@shared/models/widget.models';
import { WidgetService } from '@core/http/widget.service';
import * as i0 from "@angular/core";
export declare class TripAnimationCommonSettingsComponent extends PageComponent implements OnInit, ControlValueAccessor, Validator {
    protected store: Store<AppState>;
    private translate;
    private widgetService;
    private fb;
    disabled: boolean;
    widget: Widget;
    functionScopeVariables: string[];
    private modelValue;
    private propagateChange;
    tripAnimationCommonSettingsFormGroup: FormGroup;
    constructor(store: Store<AppState>, translate: TranslateService, widgetService: WidgetService, fb: FormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: TripAnimationCommonSettings): void;
    validate(c: FormControl): {
        tripAnimationCommonSettings: {
            valid: boolean;
        };
    };
    private updateModel;
    private updateValidators;
    static ɵfac: i0.ɵɵFactoryDeclaration<TripAnimationCommonSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TripAnimationCommonSettingsComponent, "tb-trip-animation-common-settings", never, { "disabled": "disabled"; "widget": "widget"; }, {}, never, never>;
}
