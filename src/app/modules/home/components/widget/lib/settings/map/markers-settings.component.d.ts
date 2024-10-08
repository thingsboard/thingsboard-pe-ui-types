import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { MapProviders, MarkersSettings, ShowTooltipAction } from '@home/components/widget/lib/maps/map-models';
import { WidgetService } from '@core/http/widget.service';
import * as i0 from "@angular/core";
export declare class MarkersSettingsComponent extends PageComponent implements OnInit, ControlValueAccessor, Validator, OnChanges {
    protected store: Store<AppState>;
    private translate;
    private widgetService;
    private fb;
    disabled: boolean;
    provider: MapProviders;
    mapProvider: typeof MapProviders;
    functionScopeVariables: string[];
    private modelValue;
    private propagateChange;
    markersSettingsFormGroup: UntypedFormGroup;
    showTooltipActions: ShowTooltipAction[];
    showTooltipActionTranslations: Map<ShowTooltipAction, string>;
    constructor(store: Store<AppState>, translate: TranslateService, widgetService: WidgetService, fb: UntypedFormBuilder);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: MarkersSettings): void;
    validate(c: UntypedFormControl): {
        markersSettings: {
            valid: boolean;
        };
    };
    private updateModel;
    private updateValidators;
    static ɵfac: i0.ɵɵFactoryDeclaration<MarkersSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MarkersSettingsComponent, "tb-markers-settings", never, { "disabled": { "alias": "disabled"; "required": false; }; "provider": { "alias": "provider"; "required": false; }; }, {}, never, never, false, never>;
}
