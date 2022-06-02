import { OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, Validator } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { MapProviders, UnitedMapSettings } from '@home/components/widget/lib/maps/map-models';
import { IAliasController } from '@core/api/widget-api.models';
import { Widget } from '@shared/models/widget.models';
import * as i0 from "@angular/core";
export declare class MapSettingsComponent extends PageComponent implements OnInit, ControlValueAccessor, Validator {
    protected store: Store<AppState>;
    private translate;
    private fb;
    disabled: boolean;
    aliasController: IAliasController;
    widget: Widget;
    routeMap: boolean;
    mapProvider: typeof MapProviders;
    private modelValue;
    private propagateChange;
    mapSettingsFormGroup: FormGroup;
    constructor(store: Store<AppState>, translate: TranslateService, fb: FormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: UnitedMapSettings): void;
    validate(c: FormControl): {
        mapSettings: {
            valid: boolean;
        };
    };
    private updateModel;
    displayEditorSettings(): boolean;
    private updateValidators;
    static ɵfac: i0.ɵɵFactoryDeclaration<MapSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MapSettingsComponent, "tb-map-settings", never, { "disabled": "disabled"; "aliasController": "aliasController"; "widget": "widget"; "routeMap": "routeMap"; }, {}, never, never>;
}
