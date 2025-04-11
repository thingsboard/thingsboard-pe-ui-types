import { DestroyRef, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { MapProviders, UnitedMapSettings } from '@home/components/widget/lib/maps-legacy/map-models';
import { IAliasController } from '@core/api/widget-api.models';
import { Widget } from '@shared/models/widget.models';
import * as i0 from "@angular/core";
export declare class MapSettingsLegacyComponent extends PageComponent implements OnInit, ControlValueAccessor, Validator {
    protected store: Store<AppState>;
    private translate;
    private fb;
    private destroyRef;
    disabled: boolean;
    aliasController: IAliasController;
    widget: Widget;
    routeMap: boolean;
    mapProvider: typeof MapProviders;
    private modelValue;
    private propagateChange;
    mapSettingsFormGroup: UntypedFormGroup;
    constructor(store: Store<AppState>, translate: TranslateService, fb: UntypedFormBuilder, destroyRef: DestroyRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: UnitedMapSettings): void;
    validate(c: UntypedFormControl): {
        mapSettings: {
            valid: boolean;
        };
    };
    private updateModel;
    displayEditorSettings(): boolean;
    private updateValidators;
    static ɵfac: i0.ɵɵFactoryDeclaration<MapSettingsLegacyComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MapSettingsLegacyComponent, "tb-map-settings-legacy", never, { "disabled": { "alias": "disabled"; "required": false; }; "aliasController": { "alias": "aliasController"; "required": false; }; "widget": { "alias": "widget"; "required": false; }; "routeMap": { "alias": "routeMap"; "required": false; }; }, {}, never, never, false, never>;
}
