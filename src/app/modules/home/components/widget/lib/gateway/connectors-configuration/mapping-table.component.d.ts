import { AfterViewInit, ChangeDetectorRef, ElementRef, NgZone, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { PageLink } from '@shared/models/page/page-link';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from '@core/services/dialog.service';
import { Observable } from 'rxjs';
import { Overlay } from '@angular/cdk/overlay';
import { UtilsService } from '@core/services/utils.service';
import { EntityService } from '@core/http/entity.service';
import { ControlValueAccessor, FormBuilder, UntypedFormArray } from '@angular/forms';
import { MappingType } from '@home/components/widget/lib/gateway/gateway-widget.models';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import * as i0 from "@angular/core";
export declare class MappingTableComponent extends PageComponent implements ControlValueAccessor, AfterViewInit, OnInit, OnDestroy {
    protected store: Store<AppState>;
    translate: TranslateService;
    dialog: MatDialog;
    private overlay;
    private viewContainerRef;
    private dialogService;
    private entityService;
    private utils;
    private zone;
    private cd;
    private elementRef;
    private fb;
    mappingTypeTranslationsMap: Map<MappingType, string>;
    mappingTypeEnum: typeof MappingType;
    displayedColumns: any[];
    mappingColumns: any[];
    textSearchMode: boolean;
    dataSource: MappingDatasource;
    hidePageSize: boolean;
    activeValue: boolean;
    dirtyValue: boolean;
    viewsInited: boolean;
    mappingTypeValue: MappingType;
    get mappingType(): MappingType;
    set mappingType(value: MappingType);
    searchInputField: ElementRef;
    mappingFormGroup: UntypedFormArray;
    textSearch: import("@angular/forms").FormControl<string>;
    private destroy$;
    private propagateChange;
    constructor(store: Store<AppState>, translate: TranslateService, dialog: MatDialog, overlay: Overlay, viewContainerRef: ViewContainerRef, dialogService: DialogService, entityService: EntityService, utils: UtilsService, zone: NgZone, cd: ChangeDetectorRef, elementRef: ElementRef, fb: FormBuilder);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(config: any): void;
    updateView(mappingConfigs: Array<{
        [key: string]: any;
    }>): void;
    enterFilterMode(): void;
    exitFilterMode(): void;
    manageMapping($event: Event, index?: number): void;
    updateTableData(value: Array<{
        [key: string]: any;
    }>, textSearch?: string): void;
    deleteMapping($event: Event, index: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MappingTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MappingTableComponent, "tb-mapping-table", never, { "mappingType": "mappingType"; }, {}, never, never, false, never>;
}
export declare class MappingDatasource implements DataSource<{
    [key: string]: any;
}> {
    private mappingSubject;
    private allMappings;
    constructor();
    connect(collectionViewer: CollectionViewer): Observable<Array<{
        [key: string]: any;
    }>>;
    disconnect(collectionViewer: CollectionViewer): void;
    loadMappings(mappings: Array<{
        [key: string]: any;
    }>, pageLink?: PageLink, reload?: boolean): void;
    isEmpty(): Observable<boolean>;
    total(): Observable<number>;
}
