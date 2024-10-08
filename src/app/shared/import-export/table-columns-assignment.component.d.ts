import { ElementRef, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormControl, Validator } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityType } from '@shared/models/entity-type.models';
import { CsvColumnParam, ImportEntityColumnType } from '@shared/import-export/import-export.models';
import { Observable } from 'rxjs';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import * as i0 from "@angular/core";
export declare class TableColumnsAssignmentComponent implements OnInit, ControlValueAccessor, Validator {
    elementRef: ElementRef;
    protected store: Store<AppState>;
    entityType: EntityType;
    disabled: boolean;
    dataSource: CsvColumnsDatasource;
    displayedColumns: string[];
    columnTypes: AssignmentColumnType[];
    columnDeviceCredentials: AssignmentColumnType[];
    columnTypesTranslations: Map<ImportEntityColumnType, string>;
    readonly entityTypeDevice = EntityType.DEVICE;
    private columns;
    private valid;
    private propagateChangePending;
    private propagateChange;
    constructor(elementRef: ElementRef, store: Store<AppState>);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    columnsUpdated(): void;
    isColumnTypeDiffers(columnType: ImportEntityColumnType): boolean;
    private columnValid;
    validate(c: UntypedFormControl): {
        columnsInvalid: boolean;
    };
    writeValue(value: CsvColumnParam[]): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableColumnsAssignmentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableColumnsAssignmentComponent, "tb-table-columns-assignment", never, { "entityType": { "alias": "entityType"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
interface AssignmentColumnType {
    value: ImportEntityColumnType;
    disabled?: boolean;
}
declare class CsvColumnsDatasource implements DataSource<CsvColumnParam> {
    private columnsSubject;
    constructor();
    connect(collectionViewer: CollectionViewer): Observable<CsvColumnParam[] | ReadonlyArray<CsvColumnParam>>;
    disconnect(collectionViewer: CollectionViewer): void;
    setColumns(columns: CsvColumnParam[]): void;
}
export {};
