import { OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { TripAnimationMarkerSettings } from '@home/components/widget/lib/maps/map-models';
import { WidgetService } from '@core/http/widget.service';
import * as i0 from "@angular/core";
export declare class TripAnimationMarkerSettingsComponent extends PageComponent implements OnInit, ControlValueAccessor, Validator {
    protected store: Store<AppState>;
    private translate;
    private widgetService;
    private fb;
    disabled: boolean;
    functionScopeVariables: string[];
    private modelValue;
    private propagateChange;
    tripAnimationMarkerSettingsFormGroup: UntypedFormGroup;
    constructor(store: Store<AppState>, translate: TranslateService, widgetService: WidgetService, fb: UntypedFormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: TripAnimationMarkerSettings): void;
    validate(c: UntypedFormControl): {
        tripAnimationMarkerSettings: {
            valid: boolean;
        };
    };
    private updateModel;
    private updateValidators;
    static ɵfac: i0.ɵɵFactoryDeclaration<TripAnimationMarkerSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TripAnimationMarkerSettingsComponent, "tb-trip-animation-marker-settings", never, { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
