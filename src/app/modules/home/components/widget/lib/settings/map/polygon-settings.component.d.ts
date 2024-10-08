import { OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { PolygonSettings, ShowTooltipAction } from '@home/components/widget/lib/maps/map-models';
import { WidgetService } from '@core/http/widget.service';
import { Widget } from '@shared/models/widget.models';
import * as i0 from "@angular/core";
export declare class PolygonSettingsComponent extends PageComponent implements OnInit, ControlValueAccessor, Validator {
    protected store: Store<AppState>;
    private translate;
    private widgetService;
    private fb;
    disabled: boolean;
    widget: Widget;
    functionScopeVariables: string[];
    private modelValue;
    private propagateChange;
    polygonSettingsFormGroup: UntypedFormGroup;
    showTooltipActions: ShowTooltipAction[];
    showTooltipActionTranslations: Map<ShowTooltipAction, string>;
    constructor(store: Store<AppState>, translate: TranslateService, widgetService: WidgetService, fb: UntypedFormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: PolygonSettings): void;
    validate(c: UntypedFormControl): {
        polygonSettings: {
            valid: boolean;
        };
    };
    private updateModel;
    private updateValidators;
    static ɵfac: i0.ɵɵFactoryDeclaration<PolygonSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PolygonSettingsComponent, "tb-polygon-settings", never, { "disabled": { "alias": "disabled"; "required": false; }; "widget": { "alias": "widget"; "required": false; }; }, {}, never, never, false, never>;
}
