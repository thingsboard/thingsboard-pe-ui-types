import { AfterViewInit, OnInit } from '@angular/core';
import { DialogComponent } from '@shared/components/dialog.component';
import { BaseData, HasId } from '@shared/models/base-data';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { Converter, ConverterType } from '@shared/models/converter.models';
import { ConverterComponent } from '@home/components/converter/converter.component';
import { ConverterService } from '@core/http/converter.service';
import * as i0 from "@angular/core";
export interface AddConverterDialogData {
    name: string;
    edgeTemplate?: boolean;
    type: ConverterType;
}
export declare class AddConverterDialogComponent extends DialogComponent<AddConverterDialogComponent, BaseData<HasId>> implements OnInit, AfterViewInit {
    protected store: Store<AppState>;
    protected router: Router;
    data: AddConverterDialogData;
    dialogRef: MatDialogRef<AddConverterDialogComponent, BaseData<HasId>>;
    private converterService;
    dialogTitle: string;
    converter: Converter;
    converterComponent: ConverterComponent;
    constructor(store: Store<AppState>, router: Router, data: AddConverterDialogData, dialogRef: MatDialogRef<AddConverterDialogComponent, BaseData<HasId>>, converterService: ConverterService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    helpLinkId(): string;
    cancel(): void;
    add(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AddConverterDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AddConverterDialogComponent, "tb-add-converter-dialog", never, {}, {}, never, never>;
}
