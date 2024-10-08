import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { WidgetConfigComponent } from '@home/components/widget/widget-config.component';
import { Datasource, DatasourceType, WidgetConfigMode } from '@shared/models/widget.models';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { UtilsService } from '@core/services/utils.service';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class DatasourcesComponent implements ControlValueAccessor, OnInit, Validator, OnChanges {
    private fb;
    private utils;
    translate: TranslateService;
    private widgetConfigComponent;
    datasourceType: typeof DatasourceType;
    get isAlarmSource(): boolean;
    get basicMode(): boolean;
    get maxDatasources(): number;
    get singleDatasource(): boolean;
    get showAddDatasource(): boolean;
    get dragDisabled(): boolean;
    disabled: boolean;
    hideDatasourcesMode: boolean;
    hideDatasourceLabel: boolean;
    displayDatasourceFilterForBasicMode: boolean;
    hideDataKeyLabel: boolean;
    hideDataKeyColor: boolean;
    hideDataKeyUnits: boolean;
    hideDataKeyDecimals: boolean;
    hideDataKeys: boolean;
    hideLatestDataKeys: boolean;
    forceSingleDatasource: boolean;
    configMode: WidgetConfigMode;
    datasourcesFormGroup: UntypedFormGroup;
    timeseriesKeyError: boolean;
    datasourceError: string[];
    datasourcesMode: DatasourceType;
    private propagateChange;
    constructor(fb: UntypedFormBuilder, utils: UtilsService, translate: TranslateService, widgetConfigComponent: WidgetConfigComponent);
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
    private get dataKeySettingsSchema();
    private get dataKeySettingsFunction();
    private get dataKeysCallbacks();
    private get hasAdditionalLatestDataKeys();
    private get datasourcesOptional();
    static ɵfac: i0.ɵɵFactoryDeclaration<DatasourcesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatasourcesComponent, "tb-datasources", never, { "disabled": { "alias": "disabled"; "required": false; }; "hideDatasourcesMode": { "alias": "hideDatasourcesMode"; "required": false; }; "hideDatasourceLabel": { "alias": "hideDatasourceLabel"; "required": false; }; "displayDatasourceFilterForBasicMode": { "alias": "displayDatasourceFilterForBasicMode"; "required": false; }; "hideDataKeyLabel": { "alias": "hideDataKeyLabel"; "required": false; }; "hideDataKeyColor": { "alias": "hideDataKeyColor"; "required": false; }; "hideDataKeyUnits": { "alias": "hideDataKeyUnits"; "required": false; }; "hideDataKeyDecimals": { "alias": "hideDataKeyDecimals"; "required": false; }; "hideDataKeys": { "alias": "hideDataKeys"; "required": false; }; "hideLatestDataKeys": { "alias": "hideLatestDataKeys"; "required": false; }; "forceSingleDatasource": { "alias": "forceSingleDatasource"; "required": false; }; "configMode": { "alias": "configMode"; "required": false; }; }, {}, never, never, false, never>;
}
