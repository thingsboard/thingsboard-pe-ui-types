import { Injector, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { PageComponent } from '@shared/public-api';
import { Store } from '@ngrx/store';
import { AppState } from '@core/public-api';
import { TranslateService } from '@ngx-translate/core';
import { AggLatestMapping } from './aggregate-latest-mapping.models';
import { MatDialog } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare class AggregateLatestMappingTableComponent extends PageComponent implements ControlValueAccessor, OnInit {
    protected store: Store<AppState>;
    translate: TranslateService;
    injector: Injector;
    private dialog;
    tbelFilterFunctionOnly: boolean;
    disabled: boolean;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    mappings: Array<AggLatestMapping>;
    private propagateChange;
    constructor(store: Store<AppState>, translate: TranslateService, injector: Injector, dialog: MatDialog);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    writeValue(mappings: Array<AggLatestMapping>): void;
    mappingDisplayValue(aggMapping: AggLatestMapping): string;
    removeAggMapping(index: number): void;
    addAggMapping($event: Event): void;
    editAggMapping($event: Event, aggMapping: AggLatestMapping): void;
    private openAggMappingDialog;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<AggregateLatestMappingTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AggregateLatestMappingTableComponent, "tb-agg-latest-mapping-table", never, { "tbelFilterFunctionOnly": { "alias": "tbelFilterFunctionOnly"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "required": { "alias": "required"; "required": false; }; }, {}, never, never, false, never>;
}
