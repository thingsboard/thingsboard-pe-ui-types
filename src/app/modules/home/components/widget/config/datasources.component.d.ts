import { DestroyRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { WidgetConfigComponent } from '@home/components/widget/widget-config.component';
import { Datasource, DatasourceType, WidgetConfigMode, widgetType } from '@shared/models/widget.models';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { UtilsService } from '@core/services/utils.service';
import { TranslateService } from '@ngx-translate/core';
import { IAliasController } from '@core/api/widget-api.models';
import { WidgetConfigCallbacks } from '@home/components/widget/config/widget-config.component.models';
import * as i0 from "@angular/core";
export interface DataSourcesOptions {
    maxDatasources?: number;
    maxDataKeys?: number;
    datasourcesOptional?: boolean;
    widgetType?: widgetType;
    allowFunctions?: boolean;
}
export declare class DatasourcesComponent implements ControlValueAccessor, OnInit, Validator, OnChanges {
    private fb;
    private utils;
    translate: TranslateService;
    private widgetConfigComponent;
    private destroyRef;
    datasourceType: typeof DatasourceType;
    get isAlarmSource(): boolean;
    get basicMode(): boolean;
    get maxDatasources(): number;
    get singleDatasource(): boolean;
    get showAddDatasource(): boolean;
    get dragDisabled(): boolean;
    disabled: boolean;
    stroked: boolean;
    reportMode: boolean;
    hideDatasourcesMode: boolean;
    hideDatasourceLabel: boolean;
    displayDatasourceFilterForBasicMode: boolean;
    hideDataKeyLabel: boolean;
    hideDataKeyColor: boolean;
    hideDataKeyUnits: boolean;
    hideDataKeyDecimals: boolean;
    hideDataKeys: boolean;
    hideLatestDataKeys: boolean;
    hideAlarmFilter: boolean;
    forceSingleDatasource: boolean;
    configMode: WidgetConfigMode;
    dataSourcesOptions: DataSourcesOptions;
    aliasController: IAliasController;
    callbacks: WidgetConfigCallbacks;
    datasourcesFormGroup: UntypedFormGroup;
    timeseriesKeyError: boolean;
    datasourceError: string[];
    datasourcesMode: DatasourceType;
    private propagateChange;
    private propagateChangePending;
    constructor(fb: UntypedFormBuilder, utils: UtilsService, translate: TranslateService, widgetConfigComponent: WidgetConfigComponent, destroyRef: DestroyRef);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    writeValue(datasources?: Datasource[]): void;
    validate(c: UntypedFormControl): {
        datasources: {
            valid: boolean;
        };
        timeseriesDataKeys?: undefined;
        dataKeys?: undefined;
    } | {
        timeseriesDataKeys: {
            valid: boolean;
        };
        datasources?: undefined;
        dataKeys?: undefined;
    } | {
        dataKeys: {
            valid: boolean;
        };
        datasources?: undefined;
        timeseriesDataKeys?: undefined;
    };
    datasourcesModeChange(datasourcesMode: DatasourceType): void;
    private configModeChanged;
    private detectDatasourcesMode;
    get datasourcesFormArray(): UntypedFormArray;
    get datasourcesControls(): FormControl[];
    trackByDatasource(index: number, datasourceControl: AbstractControl): any;
    private datasourcesUpdated;
    onDatasourceDrop(event: CdkDragDrop<string[]>): void;
    removeDatasource(index: number): void;
    addDatasource(emitEvent?: boolean): void;
    private hasDataSourcesOption;
    private getDataSourcesOption;
    private get dataKeySettingsForm();
    private get dataKeySettingsFunction();
    private get dataKeysCallbacks();
    private get hasAdditionalLatestDataKeys();
    get widgetType(): widgetType;
    get datasourcesOptional(): boolean;
    get maxDataKeys(): number;
    get allowFunctions(): boolean;
    get datasources(): Datasource[];
    static ɵfac: i0.ɵɵFactoryDeclaration<DatasourcesComponent, [null, null, null, { optional: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatasourcesComponent, "tb-datasources", never, { "disabled": { "alias": "disabled"; "required": false; }; "stroked": { "alias": "stroked"; "required": false; }; "reportMode": { "alias": "reportMode"; "required": false; }; "hideDatasourcesMode": { "alias": "hideDatasourcesMode"; "required": false; }; "hideDatasourceLabel": { "alias": "hideDatasourceLabel"; "required": false; }; "displayDatasourceFilterForBasicMode": { "alias": "displayDatasourceFilterForBasicMode"; "required": false; }; "hideDataKeyLabel": { "alias": "hideDataKeyLabel"; "required": false; }; "hideDataKeyColor": { "alias": "hideDataKeyColor"; "required": false; }; "hideDataKeyUnits": { "alias": "hideDataKeyUnits"; "required": false; }; "hideDataKeyDecimals": { "alias": "hideDataKeyDecimals"; "required": false; }; "hideDataKeys": { "alias": "hideDataKeys"; "required": false; }; "hideLatestDataKeys": { "alias": "hideLatestDataKeys"; "required": false; }; "hideAlarmFilter": { "alias": "hideAlarmFilter"; "required": false; }; "forceSingleDatasource": { "alias": "forceSingleDatasource"; "required": false; }; "configMode": { "alias": "configMode"; "required": false; }; "dataSourcesOptions": { "alias": "dataSourcesOptions"; "required": false; }; "aliasController": { "alias": "aliasController"; "required": false; }; "callbacks": { "alias": "callbacks"; "required": false; }; }, {}, never, never, false, never>;
}
