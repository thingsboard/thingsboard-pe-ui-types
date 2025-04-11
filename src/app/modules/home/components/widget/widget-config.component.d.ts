import { ChangeDetectorRef, DestroyRef, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { DataKey, Widget, WidgetConfigMode, widgetType } from '@shared/models/widget.models';
import { AsyncValidator, ControlValueAccessor, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, ValidationErrors } from '@angular/forms';
import { WidgetConfigComponentData } from '@home/models/widget-component.models';
import { IAliasController } from '@core/api/widget-api.models';
import { UtilsService } from '@core/services/utils.service';
import { DataKeyType } from '@shared/models/telemetry/telemetry.models';
import { TranslateService } from '@ngx-translate/core';
import { EntityType } from '@shared/models/entity-type.models';
import { Observable } from 'rxjs';
import { WidgetConfigCallbacks } from '@home/components/widget/config/widget-config.component.models';
import { MatDialog } from '@angular/material/dialog';
import { EntityService } from '@core/http/entity.service';
import { Dashboard } from '@shared/models/dashboard.models';
import { ToggleHeaderOption } from '@shared/components/toggle-header.component';
import { DataKeySettingsFunction } from '@home/components/widget/lib/settings/common/key/data-keys.component.models';
import { FormProperty } from '@shared/models/dynamic-form.models';
import { WidgetService } from '@core/http/widget.service';
import * as i0 from "@angular/core";
export declare class WidgetConfigComponent extends PageComponent implements OnInit, OnDestroy, ControlValueAccessor, AsyncValidator {
    protected store: Store<AppState>;
    private utils;
    private entityService;
    private dialog;
    translate: TranslateService;
    private fb;
    private cd;
    private widgetService;
    private destroyRef;
    basicModeContainer: ViewContainerRef;
    widgetTypes: typeof widgetType;
    widgetConfigModes: typeof WidgetConfigMode;
    entityTypes: typeof EntityType;
    forceExpandDatasources: boolean;
    aliasController: IAliasController;
    dashboard: Dashboard;
    widget: Widget;
    functionsOnly: boolean;
    hideHeader: boolean;
    hideToggleHeader: boolean;
    isAdd: boolean;
    showLayoutConfig: boolean;
    isDefaultBreakpoint: boolean;
    disabled: boolean;
    widgetConfigMode: WidgetConfigMode;
    widgetType: widgetType;
    widgetActionTypesList: import("@shared/models/widget.models").WidgetActionType[];
    widgetConfigCallbacks: WidgetConfigCallbacks;
    widgetEditMode: boolean;
    basicModeDirectiveError: string;
    modelValue: WidgetConfigComponentData;
    private propagateChange;
    headerOptions: ToggleHeaderOption[];
    selectedOption: string;
    displayDataExport: boolean;
    dataSettings: UntypedFormGroup;
    targetDeviceSettings: UntypedFormGroup;
    widgetSettings: UntypedFormGroup;
    layoutSettings: UntypedFormGroup;
    advancedSettings: UntypedFormGroup;
    actionsSettings: UntypedFormGroup;
    private createBasicModeComponentTimeout;
    private basicModeComponentRef;
    private basicModeComponent;
    private basicModeComponent$;
    private basicModeComponentChangeSubscription;
    private dataSettingsChangesSubscription;
    private targetDeviceSettingsSubscription;
    private widgetSettingsSubscription;
    private layoutSettingsSubscription;
    private advancedSettingsSubscription;
    private actionsSettingsSubscription;
    private defaultConfigFormsType;
    constructor(store: Store<AppState>, utils: UtilsService, entityService: EntityService, dialog: MatDialog, translate: TranslateService, fb: UntypedFormBuilder, cd: ChangeDetectorRef, widgetService: WidgetService, destroyRef: DestroyRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private removeChangeSubscriptions;
    private createChangeSubscriptions;
    private buildHeader;
    private buildForms;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: WidgetConfigComponentData): void;
    setWidgetConfigMode(widgetConfigMode: WidgetConfigMode): void;
    private setupConfig;
    private setupBasicModeConfig;
    private destroyBasicModeComponent;
    private setupDefaultConfig;
    private updateWidgetSettingsEnabledState;
    private updateLayoutEnabledState;
    private updateAdvancedForm;
    private updateDataSettings;
    private updateTargetDeviceSettings;
    private updateWidgetSettings;
    private updateLayoutSettings;
    private updateAdvancedSettings;
    private updateActionSettings;
    get hasBasicModeDirective(): boolean;
    get useDefinedBasicModeDirective(): boolean;
    get displayData(): boolean;
    get displayAppearance(): boolean;
    get displayAdvancedAppearance(): boolean;
    get displayTimewindowConfig(): boolean;
    get displayLimits(): boolean;
    get displayAppearanceDataSettings(): boolean;
    get displayUnitsConfig(): boolean;
    get displayNoDataDisplayMessageConfig(): boolean;
    onlyHistoryTimewindow(): boolean;
    generateDataKey(chip: any, type: DataKeyType, dataKeySettingsForm: FormProperty[], isLatestDataKey: boolean, dataKeySettingsFunction: DataKeySettingsFunction): DataKey;
    private genNextColor;
    private createEntityAlias;
    private editEntityAlias;
    private createFilter;
    private fetchEntityKeysForDevice;
    private fetchEntityKeys;
    private fetchDashboardStates;
    private fetchCellClickColumns;
    private keysToCellClickColumns;
    private createFilterForDashboardState;
    validate(c: UntypedFormControl): Observable<ValidationErrors | null>;
    private doValidate;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WidgetConfigComponent, "tb-widget-config", never, { "forceExpandDatasources": { "alias": "forceExpandDatasources"; "required": false; }; "aliasController": { "alias": "aliasController"; "required": false; }; "dashboard": { "alias": "dashboard"; "required": false; }; "widget": { "alias": "widget"; "required": false; }; "functionsOnly": { "alias": "functionsOnly"; "required": false; }; "hideHeader": { "alias": "hideHeader"; "required": false; }; "hideToggleHeader": { "alias": "hideToggleHeader"; "required": false; }; "isAdd": { "alias": "isAdd"; "required": false; }; "showLayoutConfig": { "alias": "showLayoutConfig"; "required": false; }; "isDefaultBreakpoint": { "alias": "isDefaultBreakpoint"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, [".tb-widget-config-header-prefix", ".tb-widget-config-header-suffix"], false, never>;
}
