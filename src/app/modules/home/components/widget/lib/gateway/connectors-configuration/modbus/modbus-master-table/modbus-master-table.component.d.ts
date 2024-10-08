import { AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from '@core/services/dialog.service';
import { ControlValueAccessor, FormArray, FormBuilder, UntypedFormGroup } from '@angular/forms';
import { ModbusMasterConfig, SlaveConfig } from '@home/components/widget/lib/gateway/gateway-widget.models';
import { TbTableDatasource } from '@shared/components/table/table-datasource.abstract';
import * as i0 from "@angular/core";
export declare class ModbusMasterTableComponent implements ControlValueAccessor, AfterViewInit, OnInit, OnDestroy {
    translate: TranslateService;
    dialog: MatDialog;
    private dialogService;
    private fb;
    private cdr;
    searchInputField: ElementRef;
    isLegacy: boolean;
    textSearchMode: boolean;
    dataSource: SlavesDatasource;
    masterFormGroup: UntypedFormGroup;
    textSearch: import("@angular/forms").FormControl<string>;
    readonly ModbusProtocolLabelsMap: Map<import("@home/components/widget/lib/gateway/gateway-widget.models").ModbusProtocolType, string>;
    private onChange;
    private onTouched;
    private destroy$;
    constructor(translate: TranslateService, dialog: MatDialog, dialogService: DialogService, fb: FormBuilder, cdr: ChangeDetectorRef);
    get slaves(): FormArray;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    registerOnChange(fn: (value: ModbusMasterConfig) => void): void;
    registerOnTouched(fn: () => void): void;
    writeValue(master: ModbusMasterConfig): void;
    enterFilterMode(): void;
    exitFilterMode(): void;
    manageSlave($event: Event, index?: number): void;
    private getSlaveDialog;
    deleteSlave($event: Event, index: number): void;
    private updateTableData;
    private pushDataAsFormArrays;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModbusMasterTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ModbusMasterTableComponent, "tb-modbus-master-table", never, { "isLegacy": { "alias": "isLegacy"; "required": false; }; }, {}, never, never, true, never>;
}
export declare class SlavesDatasource extends TbTableDatasource<SlaveConfig> {
    constructor();
}
