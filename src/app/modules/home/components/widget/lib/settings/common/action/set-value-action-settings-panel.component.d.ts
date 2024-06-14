import { EventEmitter, OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { SetValueAction, SetValueSettings, ValueToDataType } from '@shared/models/action-widget-settings.models';
import { TargetDevice, widgetType } from '@shared/models/widget.models';
import { AttributeScope, DataKeyType } from '@shared/models/telemetry/telemetry.models';
import { IAliasController } from '@core/api/widget-api.models';
import { WidgetService } from '@core/http/widget.service';
import { ValueType } from '@shared/models/constants';
import * as i0 from "@angular/core";
export declare class SetValueActionSettingsPanelComponent extends PageComponent implements OnInit {
    private fb;
    private widgetService;
    protected store: Store<AppState>;
    panelTitle: string;
    valueType: ValueType;
    setValueSettings: SetValueSettings;
    aliasController: IAliasController;
    targetDevice: TargetDevice;
    widgetType: widgetType;
    popover: TbPopoverComponent<SetValueActionSettingsPanelComponent>;
    setValueSettingsApplied: EventEmitter<SetValueSettings>;
    setValueAction: typeof SetValueAction;
    setValueActions: SetValueAction[];
    setValueActionTranslationsMap: Map<SetValueAction, string>;
    telemetryTypeTranslationsMap: Map<import("@shared/models/telemetry/telemetry.models").TelemetryType, string>;
    attributeScopes: AttributeScope[];
    dataKeyType: typeof DataKeyType;
    valueToDataType: typeof ValueToDataType;
    functionScopeVariables: string[];
    ValueType: typeof ValueType;
    setValueSettingsFormGroup: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder, widgetService: WidgetService, store: Store<AppState>);
    ngOnInit(): void;
    cancel(): void;
    applySetValueSettings(): void;
    private updateValidators;
    static ɵfac: i0.ɵɵFactoryDeclaration<SetValueActionSettingsPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SetValueActionSettingsPanelComponent, "tb-set-value-action-settings-panel", never, { "panelTitle": "panelTitle"; "valueType": "valueType"; "setValueSettings": "setValueSettings"; "aliasController": "aliasController"; "targetDevice": "targetDevice"; "widgetType": "widgetType"; "popover": "popover"; }, { "setValueSettingsApplied": "setValueSettingsApplied"; }, never, never, false, never>;
}