import { DestroyRef, EventEmitter, OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { ColorSettings, ColorType } from '@shared/models/widget-settings.models';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { WidgetService } from '@core/http/widget.service';
import { ColorSettingsComponent } from '@home/components/widget/lib/settings/common/color-settings.component';
import { IAliasController } from '@core/api/widget-api.models';
import { DataKeysCallbacks } from '@home/components/widget/lib/settings/common/key/data-keys.component.models';
import { Datasource } from '@shared/models/widget.models';
import * as i0 from "@angular/core";
export declare class ColorSettingsPanelComponent extends PageComponent implements OnInit {
    private fb;
    private widgetService;
    protected store: Store<AppState>;
    private destroyRef;
    colorSettings: ColorSettings;
    popover: TbPopoverComponent<ColorSettingsPanelComponent>;
    settingsComponents: ColorSettingsComponent[];
    colorSettingsApplied: EventEmitter<ColorSettings>;
    aliasController: IAliasController;
    dataKeyCallbacks: DataKeysCallbacks;
    datasource: Datasource;
    rangeAdvancedMode: boolean;
    gradientAdvancedMode: boolean;
    minValue: number;
    maxValue: number;
    colorType: typeof ColorType;
    colorTypes: ColorType[];
    colorTypeTranslationsMap: Map<ColorType, string>;
    colorSettingsFormGroup: UntypedFormGroup;
    functionScopeVariables: string[];
    constructor(fb: UntypedFormBuilder, widgetService: WidgetService, store: Store<AppState>, destroyRef: DestroyRef);
    ngOnInit(): void;
    updateValidators(): void;
    copyColorSettings(comp: ColorSettingsComponent): void;
    cancel(): void;
    applyColorSettings(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorSettingsPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ColorSettingsPanelComponent, "tb-color-settings-panel", never, { "colorSettings": { "alias": "colorSettings"; "required": false; }; "popover": { "alias": "popover"; "required": false; }; "settingsComponents": { "alias": "settingsComponents"; "required": false; }; "aliasController": { "alias": "aliasController"; "required": false; }; "dataKeyCallbacks": { "alias": "dataKeyCallbacks"; "required": false; }; "datasource": { "alias": "datasource"; "required": false; }; "rangeAdvancedMode": { "alias": "rangeAdvancedMode"; "required": false; }; "gradientAdvancedMode": { "alias": "gradientAdvancedMode"; "required": false; }; "minValue": { "alias": "minValue"; "required": false; }; "maxValue": { "alias": "maxValue"; "required": false; }; }, { "colorSettingsApplied": "colorSettingsApplied"; }, never, never, false, never>;
}
