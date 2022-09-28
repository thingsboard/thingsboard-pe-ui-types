import { OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { DataKey, Datasource, DatasourceType, JsonSettingsSchema, Widget, widgetType } from '@shared/models/widget.models';
import { ControlValueAccessor, FormArray, FormBuilder, FormControl, FormGroup, Validator } from '@angular/forms';
import { WidgetConfigComponentData } from '@home/models/widget-component.models';
import { AlarmSearchStatus, AlarmSeverity } from '@shared/models/alarm.models';
import { IAliasController } from '@core/api/widget-api.models';
import { UtilsService } from '@core/services/utils.service';
import { DataKeyType } from '@shared/models/telemetry/telemetry.models';
import { TranslateService } from '@ngx-translate/core';
import { EntityType } from '@shared/models/entity-type.models';
import { WidgetConfigCallbacks } from '@home/components/widget/widget-config.component.models';
import { MatDialog } from '@angular/material/dialog';
import { EntityService } from '@core/http/entity.service';
import { Dashboard } from '@shared/models/dashboard.models';
import { MatChipInputEvent } from '@angular/material/chips';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
export declare class WidgetConfigComponent extends PageComponent implements OnInit, ControlValueAccessor, Validator {
    protected store: Store<AppState>;
    private utils;
    private entityService;
    private dialog;
    private translate;
    private fb;
    readonly separatorKeysCodes: number[];
    widgetTypes: typeof widgetType;
    entityTypes: typeof EntityType;
    alarmSearchStatuses: AlarmSearchStatus[];
    alarmSearchStatusTranslationMap: Map<AlarmSearchStatus, string>;
    alarmSeverities: string[];
    alarmSeverityEnum: typeof AlarmSeverity;
    alarmSeverityTranslationMap: Map<AlarmSeverity, string>;
    forceExpandDatasources: boolean;
    aliasController: IAliasController;
    dashboard: Dashboard;
    widget: Widget;
    functionsOnly: boolean;
    disabled: boolean;
    widgetType: widgetType;
    datasourceType: typeof DatasourceType;
    datasourceTypes: Array<DatasourceType>;
    datasourceTypesTranslations: Map<DatasourceType, string>;
    widgetActionTypesList: import("@shared/models/widget.models").WidgetActionType[];
    widgetConfigCallbacks: WidgetConfigCallbacks;
    widgetEditMode: boolean;
    selectedTab: number;
    modelValue: WidgetConfigComponentData;
    showLegendFieldset: boolean;
    private propagateChange;
    dataSettings: FormGroup;
    targetDeviceSettings: FormGroup;
    alarmSourceSettings: FormGroup;
    widgetSettings: FormGroup;
    layoutSettings: FormGroup;
    advancedSettings: FormGroup;
    actionsSettings: FormGroup;
    dataError: string;
    datasourceError: string[];
    private dataSettingsChangesSubscription;
    private targetDeviceSettingsSubscription;
    private alarmSourceSettingsSubscription;
    private widgetSettingsSubscription;
    private layoutSettingsSubscription;
    private advancedSettingsSubscription;
    private actionsSettingsSubscription;
    constructor(store: Store<AppState>, utils: UtilsService, entityService: EntityService, dialog: MatDialog, translate: TranslateService, fb: FormBuilder);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private removeChangeSubscriptions;
    private createChangeSubscriptions;
    private buildForms;
    datasourcesFormArray(): FormArray;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: WidgetConfigComponentData): void;
    dataKeysOptional(datasource?: Datasource): boolean;
    private buildDatasourceForm;
    private updateSchemaForm;
    private updateDataSettings;
    private updateTargetDeviceSettings;
    private updateAlarmSourceSettings;
    private updateWidgetSettings;
    private updateLayoutSettings;
    private updateAdvancedSettings;
    private updateActionSettings;
    alarmTypeList(): string[];
    removeAlarmType(type: string): void;
    addAlarmType(event: MatChipInputEvent): void;
    displayAdvanced(): boolean;
    displayTimewindowConfig(): boolean;
    onlyHistoryTimewindow(): boolean;
    onDatasourceDrop(event: CdkDragDrop<string[]>): void;
    removeDatasource(index: number): void;
    addDatasource(): void;
    generateDataKey(chip: any, type: DataKeyType, datakeySettingsSchema: JsonSettingsSchema): DataKey;
    private genNextLabel;
    private genNextColor;
    private createEntityAlias;
    private createFilter;
    private fetchEntityKeys;
    private fetchDashboardStates;
    private createFilterForDashboardState;
    validate(c: FormControl): {
        dataSettings: {
            valid: boolean;
        };
        widgetSettings?: undefined;
        advancedSettings?: undefined;
        targetDeviceAliasIds?: undefined;
        alarmSource?: undefined;
        datasources?: undefined;
        timeseriesDataKeys?: undefined;
        dataKeys?: undefined;
    } | {
        widgetSettings: {
            valid: boolean;
        };
        dataSettings?: undefined;
        advancedSettings?: undefined;
        targetDeviceAliasIds?: undefined;
        alarmSource?: undefined;
        datasources?: undefined;
        timeseriesDataKeys?: undefined;
        dataKeys?: undefined;
    } | {
        advancedSettings: {
            valid: boolean;
        };
        dataSettings?: undefined;
        widgetSettings?: undefined;
        targetDeviceAliasIds?: undefined;
        alarmSource?: undefined;
        datasources?: undefined;
        timeseriesDataKeys?: undefined;
        dataKeys?: undefined;
    } | {
        targetDeviceAliasIds: {
            valid: boolean;
        };
        dataSettings?: undefined;
        widgetSettings?: undefined;
        advancedSettings?: undefined;
        alarmSource?: undefined;
        datasources?: undefined;
        timeseriesDataKeys?: undefined;
        dataKeys?: undefined;
    } | {
        alarmSource: {
            valid: boolean;
        };
        dataSettings?: undefined;
        widgetSettings?: undefined;
        advancedSettings?: undefined;
        targetDeviceAliasIds?: undefined;
        datasources?: undefined;
        timeseriesDataKeys?: undefined;
        dataKeys?: undefined;
    } | {
        datasources: {
            valid: boolean;
        };
        dataSettings?: undefined;
        widgetSettings?: undefined;
        advancedSettings?: undefined;
        targetDeviceAliasIds?: undefined;
        alarmSource?: undefined;
        timeseriesDataKeys?: undefined;
        dataKeys?: undefined;
    } | {
        timeseriesDataKeys: {
            valid: boolean;
        };
        dataSettings?: undefined;
        widgetSettings?: undefined;
        advancedSettings?: undefined;
        targetDeviceAliasIds?: undefined;
        alarmSource?: undefined;
        datasources?: undefined;
        dataKeys?: undefined;
    } | {
        dataKeys: {
            valid: boolean;
        };
        dataSettings?: undefined;
        widgetSettings?: undefined;
        advancedSettings?: undefined;
        targetDeviceAliasIds?: undefined;
        alarmSource?: undefined;
        datasources?: undefined;
        timeseriesDataKeys?: undefined;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WidgetConfigComponent, "tb-widget-config", never, { "forceExpandDatasources": "forceExpandDatasources"; "aliasController": "aliasController"; "dashboard": "dashboard"; "widget": "widget"; "functionsOnly": "functionsOnly"; "disabled": "disabled"; }, {}, never, never>;
}
