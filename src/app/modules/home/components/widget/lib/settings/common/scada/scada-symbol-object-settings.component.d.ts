import { ChangeDetectorRef, DestroyRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { ScadaSymbolBehaviorType, ScadaSymbolMetadata, ScadaSymbolObjectSettings } from '@home/components/widget/lib/scada/scada-symbol.models';
import { IAliasController } from '@core/api/widget-api.models';
import { TargetDevice, widgetType } from '@shared/models/widget.models';
import { ScadaSymbolBehaviorGroup } from '@home/components/widget/lib/settings/common/scada/scada-symbol-object-settings.models';
import { WidgetActionCallbacks } from '@home/components/widget/action/manage-widget-actions.component.models';
import { ImageService } from '@core/http/image.service';
import * as i0 from "@angular/core";
export declare class ScadaSymbolObjectSettingsComponent implements OnInit, OnChanges, ControlValueAccessor, Validator {
    protected store: Store<AppState>;
    private fb;
    private imageService;
    private cd;
    private destroyRef;
    ScadaSymbolBehaviorType: typeof ScadaSymbolBehaviorType;
    disabled: boolean;
    scadaSymbolUrl: string;
    scadaSymbolContent: string;
    scadaSymbolMetadata: ScadaSymbolMetadata;
    aliasController: IAliasController;
    targetDevice: TargetDevice;
    callbacks: WidgetActionCallbacks;
    widgetType: widgetType;
    private modelValue;
    private propagateChange;
    scadaSymbolObjectSettingsFormGroup: UntypedFormGroup;
    metadata: ScadaSymbolMetadata;
    behaviorGroups: ScadaSymbolBehaviorGroup[];
    constructor(store: Store<AppState>, fb: UntypedFormBuilder, imageService: ImageService, cd: ChangeDetectorRef, destroyRef: DestroyRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: ScadaSymbolObjectSettings): void;
    validate(_c: UntypedFormControl): {
        scadaSymbolObjectSettings: {
            valid: boolean;
        };
    };
    private loadMetadata;
    private setupValue;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScadaSymbolObjectSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ScadaSymbolObjectSettingsComponent, "tb-scada-symbol-object-settings", never, { "disabled": { "alias": "disabled"; "required": false; }; "scadaSymbolUrl": { "alias": "scadaSymbolUrl"; "required": false; }; "scadaSymbolContent": { "alias": "scadaSymbolContent"; "required": false; }; "scadaSymbolMetadata": { "alias": "scadaSymbolMetadata"; "required": false; }; "aliasController": { "alias": "aliasController"; "required": false; }; "targetDevice": { "alias": "targetDevice"; "required": false; }; "callbacks": { "alias": "callbacks"; "required": false; }; "widgetType": { "alias": "widgetType"; "required": false; }; }, {}, never, [".tb-scada-symbol-appearance-properties"], false, never>;
}
