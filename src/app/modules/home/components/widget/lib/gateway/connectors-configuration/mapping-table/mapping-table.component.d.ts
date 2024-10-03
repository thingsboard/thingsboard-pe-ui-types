import { AfterViewInit, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from '@core/services/dialog.service';
import { ControlValueAccessor, FormBuilder, UntypedFormArray, ValidationErrors, Validator } from '@angular/forms';
import { ConnectorMapping, MappingType, MappingValue } from '@home/components/widget/lib/gateway/gateway-widget.models';
import { TbTableDatasource } from '@shared/components/table/table-datasource.abstract';
import * as i0 from "@angular/core";
export declare class MappingTableComponent implements ControlValueAccessor, Validator, AfterViewInit, OnInit, OnDestroy {
    translate: TranslateService;
    dialog: MatDialog;
    private dialogService;
    private fb;
    required: boolean;
    set mappingType(value: MappingType);
    get mappingType(): MappingType;
    searchInputField: ElementRef;
    mappingTypeTranslationsMap: Map<MappingType, string>;
    mappingTypeEnum: typeof MappingType;
    displayedColumns: any[];
    mappingColumns: any[];
    textSearchMode: boolean;
    dataSource: MappingDatasource;
    hidePageSize: boolean;
    activeValue: boolean;
    dirtyValue: boolean;
    mappingTypeValue: MappingType;
    mappingFormGroup: UntypedFormArray;
    textSearch: import("@angular/forms").FormControl<string>;
    private onChange;
    private onTouched;
    private destroy$;
    constructor(translate: TranslateService, dialog: MatDialog, dialogService: DialogService, fb: FormBuilder);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    registerOnChange(fn: (value: string) => void): void;
    registerOnTouched(fn: () => void): void;
    writeValue(connectorMappings: ConnectorMapping[]): void;
    validate(): ValidationErrors | null;
    enterFilterMode(): void;
    exitFilterMode(): void;
    manageMapping($event: Event, index?: number): void;
    private updateTableData;
    deleteMapping($event: Event, index: number): void;
    private pushDataAsFormArrays;
    private getMappingValue;
    private setMappingColumns;
    static ɵfac: i0.ɵɵFactoryDeclaration<MappingTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MappingTableComponent, "tb-mapping-table", never, { "required": "required"; "mappingType": "mappingType"; }, {}, never, never, true, never>;
}
export declare class MappingDatasource extends TbTableDatasource<MappingValue> {
    constructor();
}
